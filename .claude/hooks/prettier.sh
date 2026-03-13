#!/bin/bash
# Hook PostToolUse — lance Prettier sur le fichier modifié

PAYLOAD=$(cat)
FILE_PATH=$(echo "$PAYLOAD" | jq -r '.tool_input.file_path // empty')

[ -z "$FILE_PATH" ] && exit 0
[ ! -f "$FILE_PATH" ] && exit 0

# Extensions supportées par Prettier
if echo "$FILE_PATH" | grep -qE '\.(js|jsx|ts|tsx|json|css|scss|html|md|yaml|yml)$'; then
  cd "/Users/abderaoufniati/Desktop/Developer/Claude/MeetingMirror"
  npx prettier --write "$FILE_PATH" 2>/dev/null
fi
