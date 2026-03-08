import type { NextApiRequest, NextApiResponse } from 'next';
import Anthropic from '@anthropic-ai/sdk';
import { sanitizeAnalysis } from '@/lib/sanitize';
import { SYSTEM_PROMPT, buildUserMessage } from '@/lib/prompt';
import type { ApiResponse } from '@/lib/types';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const { transcript } = req.body;

  // Basic validation
  if (!transcript || typeof transcript !== 'string' || transcript.trim().length < 50) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a transcript of at least 50 characters.',
    });
  }

  if (transcript.length > 50000) {
    return res.status(400).json({
      success: false,
      error: 'Transcript is too long. Please limit to 50,000 characters.',
    });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'API key not configured. Please add ANTHROPIC_API_KEY to your .env.local file.',
    });
  }

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        { role: 'user', content: buildUserMessage(transcript.trim()) },
      ],
    });

    // Extract text content from the response
    const content = message.content[0];
    if (!content || content.type !== 'text') {
      return res.status(500).json({
        success: false,
        error: 'Unexpected response format from AI. Please try again.',
      });
    }

    // Parse the JSON — Claude should return only JSON per our system prompt
    let raw: unknown;
    try {
      // Strip any accidental markdown fences just in case
      const cleaned = content.text
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();
      raw = JSON.parse(cleaned);
    } catch {
      console.error('JSON parse failed. Raw response:', content.text);
      return res.status(500).json({
        success: false,
        error: 'The AI returned an unexpected format. Please try again.',
      });
    }

    // Sanitize and fill any missing fields with safe defaults
    const data = sanitizeAnalysis(raw);

    return res.status(200).json({ success: true, data });
  } catch (err: unknown) {
    console.error('Anthropic API error:', err);

    // Surface a helpful message for common errors
    if (err instanceof Anthropic.APIError) {
      if (err.status === 401) {
        return res.status(500).json({
          success: false,
          error: 'Invalid API key. Please check your ANTHROPIC_API_KEY in .env.local.',
        });
      }
      if (err.status === 429) {
        return res.status(500).json({
          success: false,
          error: 'Rate limit reached. Please wait a moment and try again.',
        });
      }
    }

    return res.status(500).json({
      success: false,
      error: 'Analysis failed. Please try again.',
    });
  }
}
