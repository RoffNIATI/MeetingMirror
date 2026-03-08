export type Lang = 'en' | 'fr';

const translations = {
  en: {
    // Header
    navHowItWorks: 'How it works',
    navTryIt: 'Try it',
    tryForFree: 'Try for free',

    // Hero
    eyebrow: 'AI-powered meeting analysis',
    heroLine1: 'Turn messy meetings',
    heroLine2: 'into clear decisions',
    heroSub:
      "More than a summary. MeetingMirror analyzes your transcript and surfaces what was decided, what's still unclear, and what needs to happen next — with a clarity score.",
    ctaAnalyze: 'Analyze a meeting',
    ctaHowItWorks: 'How it works',
    statMeetingTypes: 'Meeting types supported',
    statMeetingTypesVal: 'Any format',
    statSections: 'Output sections',
    statSectionsVal: '8 structured',
    statSetup: 'Setup required',
    statSetupVal: 'None — paste & go',

    // How it works
    howTitle: 'How it works',
    howSub: 'Three steps from messy transcript to clear, structured output.',
    step1Title: 'Paste your transcript',
    step1Desc:
      'Drop in raw meeting notes, a copied transcript, or exported text from any tool. No formatting required.',
    step2Title: 'AI analyzes in seconds',
    step2Desc:
      'Claude reads the transcript and extracts decisions, action items, open questions, risks, and meeting quality signals.',
    step3Title: 'Get a structured report',
    step3Desc:
      'Receive 8 clear sections with a Meeting Clarity Score, copyable follow-up message, and actionable recommendations.',

    // Transcript input
    demoMode: 'Demo mode',
    demoBannerText: '— Results are simulated. To enable real AI analysis, add API credits at',
    demoBannerCode: 'NEXT_PUBLIC_DEMO_MODE=false',
    analyzeTitle: 'Analyze a meeting',
    analyzeSub: 'Paste any meeting transcript or notes below. The more detail, the better the analysis.',
    placeholder:
      'Paste your meeting transcript or notes here…\n\nExample: attendee names, discussion topics, decisions made, action items mentioned, open questions.',
    loadExample: 'Load example transcript',
    clear: 'Clear',
    analyzeBtn: 'Analyze meeting',
    demoAnalyzeBtn: 'Run demo analysis',
    analyzing: 'Analyzing…',
    loadingTitle: 'Claude is analyzing your meeting…',
    demoLoadingTitle: 'Running demo analysis…',
    loadingSub: 'Extracting decisions, action items, ambiguities, and clarity score.',

    // Results panel
    resultsTitle: 'Analysis complete',
    resultsSub: 'Review each section below. Copy individual cards or export everything.',
    exportMd: 'Export .md',
    newAnalysis: 'New analysis',

    // Card titles
    cardSummary: 'Executive Summary',
    cardDecisions: 'Decisions',
    cardActions: 'Action Items',
    cardUnresolved: 'Unresolved Items',
    cardKeyPoints: 'Key Discussion Points',
    cardRisks: 'Risks',
    cardClarity: 'Meeting Clarity Score',
    cardFollowUp: 'Suggested Follow-up Message',

    // Badges / labels
    confirmed: 'Confirmed',
    likely: 'Likely',
    ownerUnclear: 'Owner unclear',
    highConfidence: 'high confidence',
    mediumConfidence: 'medium confidence',
    lowConfidence: 'low confidence',
    unknownConfidence: 'unknown confidence',
    highImpact: 'high impact',
    mediumImpact: 'medium impact',
    lowImpact: 'low impact',
    openQuestion: 'Open Question',
    ambiguity: 'Ambiguity',
    conflict: 'Conflict',
    missingInfo: 'Missing Info',
    scoreStrong: 'Strong',
    scoreModerate: 'Moderate',
    scoreWeak: 'Weak',
    scorePoor: 'Poor',
    strengths: 'Strengths',
    gaps: 'Gaps',
    recommendations: 'Recommendations',
    noDecisions: 'No explicit decisions were identified.',
    noActions: 'No clear action items were identified.',
    noUnresolved: 'No major unresolved items detected.',
    noRisks: 'No significant risks identified.',
    noKeyPoints: 'No key points extracted.',
    noFollowUp: 'No follow-up message generated.',

    // Footer
    footerTagline: 'Turn messy transcripts into clear decisions and next steps.',
    footerPowered: 'Powered by Claude · Built with Next.js',
  },

  fr: {
    // Header
    navHowItWorks: 'Comment ça marche',
    navTryIt: 'Essayer',
    tryForFree: 'Essayer gratuitement',

    // Hero
    eyebrow: 'Analyse de réunions par IA',
    heroLine1: 'Transformez vos réunions',
    heroLine2: 'en décisions claires',
    heroSub:
      "Plus qu'un résumé. MeetingMirror analyse votre transcript et met en lumière ce qui a été décidé, ce qui reste flou, et ce qu'il faut faire ensuite — avec un score de clarté.",
    ctaAnalyze: 'Analyser une réunion',
    ctaHowItWorks: 'Comment ça marche',
    statMeetingTypes: 'Types de réunions supportés',
    statMeetingTypesVal: 'Tous formats',
    statSections: 'Sections générées',
    statSectionsVal: '8 structurées',
    statSetup: 'Configuration requise',
    statSetupVal: 'Aucune — collez et analysez',

    // How it works
    howTitle: 'Comment ça marche',
    howSub: 'Trois étapes pour transformer un transcript brut en rapport structuré.',
    step1Title: 'Collez votre transcript',
    step1Desc:
      "Déposez des notes brutes, un transcript copié ou du texte exporté depuis n'importe quel outil. Aucune mise en forme requise.",
    step2Title: "L'IA analyse en quelques secondes",
    step2Desc:
      'Claude lit le transcript et extrait les décisions, actions, questions ouvertes, risques et signaux de qualité.',
    step3Title: 'Obtenez un rapport structuré',
    step3Desc:
      'Recevez 8 sections claires avec un score de clarté, un message de suivi à copier et des recommandations concrètes.',

    // Transcript input
    demoMode: 'Mode démo',
    demoBannerText: "— Les résultats sont simulés. Pour activer l'analyse IA réelle, ajoutez des crédits API sur",
    demoBannerCode: 'NEXT_PUBLIC_DEMO_MODE=false',
    analyzeTitle: 'Analyser une réunion',
    analyzeSub: "Collez n'importe quel transcript ou notes ci-dessous. Plus il y a de détails, meilleure est l'analyse.",
    placeholder:
      'Collez ici votre transcript ou vos notes de réunion…\n\nExemple : noms des participants, sujets discutés, décisions prises, actions mentionnées, questions ouvertes.',
    loadExample: 'Charger un exemple',
    clear: 'Effacer',
    analyzeBtn: 'Analyser la réunion',
    demoAnalyzeBtn: 'Lancer la démo',
    analyzing: 'Analyse en cours…',
    loadingTitle: 'Claude analyse votre réunion…',
    demoLoadingTitle: 'Analyse démo en cours…',
    loadingSub: 'Extraction des décisions, actions, ambiguïtés et score de clarté.',

    // Results panel
    resultsTitle: 'Analyse terminée',
    resultsSub: 'Consultez chaque section ci-dessous. Copiez les cartes individuellement ou exportez tout.',
    exportMd: 'Exporter .md',
    newAnalysis: 'Nouvelle analyse',

    // Card titles
    cardSummary: 'Résumé exécutif',
    cardDecisions: 'Décisions',
    cardActions: 'Actions',
    cardUnresolved: 'Points non résolus',
    cardKeyPoints: 'Points clés discutés',
    cardRisks: 'Risques',
    cardClarity: 'Score de clarté',
    cardFollowUp: 'Message de suivi suggéré',

    // Badges / labels
    confirmed: 'Confirmé',
    likely: 'Probable',
    ownerUnclear: 'Responsable inconnu',
    highConfidence: 'confiance élevée',
    mediumConfidence: 'confiance moyenne',
    lowConfidence: 'confiance faible',
    unknownConfidence: 'confiance inconnue',
    highImpact: 'impact élevé',
    mediumImpact: 'impact moyen',
    lowImpact: 'impact faible',
    openQuestion: 'Question ouverte',
    ambiguity: 'Ambiguïté',
    conflict: 'Conflit',
    missingInfo: 'Info manquante',
    scoreStrong: 'Solide',
    scoreModerate: 'Modéré',
    scoreWeak: 'Faible',
    scorePoor: 'Insuffisant',
    strengths: 'Points forts',
    gaps: 'Lacunes',
    recommendations: 'Recommandations',
    noDecisions: 'Aucune décision explicite identifiée.',
    noActions: 'Aucune action claire identifiée.',
    noUnresolved: 'Aucun point non résolu majeur détecté.',
    noRisks: 'Aucun risque significatif identifié.',
    noKeyPoints: 'Aucun point clé extrait.',
    noFollowUp: 'Aucun message de suivi généré.',

    // Footer
    footerTagline: 'Transformez vos transcripts en décisions et prochaines étapes claires.',
    footerPowered: 'Propulsé par Claude · Développé avec Next.js',
  },
};

export type Translations = Record<string, string>;

export function useT(lang: Lang): Translations {
  return translations[lang] as Translations;
}
