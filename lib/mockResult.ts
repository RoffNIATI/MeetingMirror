import type { AnalysisResult } from './types';
import type { Lang } from './i18n';

export function getMockResult(lang: Lang): AnalysisResult {
  return lang === 'fr' ? MOCK_RESULT_FR : MOCK_RESULT;
}

// ─── English mock ─────────────────────────────────────────────────────────────
export const MOCK_RESULT: AnalysisResult = {
  executiveSummary:
    'The team completed Sprint 22 with the dashboard v2 shipped, though a late regression delayed the release by two days. Sprint 23 planning aligned on onboarding V2 as the primary goal. Several action items were assigned but two key dependencies — user research ownership and mobile scope confirmation — remain unresolved and could impact the sprint timeline.',

  keyDiscussionPoints: [
    'Search query performance is averaging 4 seconds, well above the 800ms target — likely an N+1 query issue (unconfirmed)',
    'Onboarding V2 is the primary sprint 23 goal; designs are 80% complete pending user research findings',
    'Mobile scope for onboarding V2 is ambiguous and was not confirmed with the mobile team',
    'User research summary ownership is unclear — Lisa was assumed responsible but was not present',
    'The team agreed to trial async standups via Slack for two weeks instead of daily Zoom calls',
    'Performance refactor was explicitly deferred to a future sprint',
  ],

  confirmedDecisions: [
    {
      text: 'Onboarding V2 is the primary goal for Sprint 23.',
      status: 'confirmed',
      context: 'Explicitly agreed by Sarah and James',
    },
    {
      text: 'The performance refactor is deferred — not included in Sprint 23.',
      status: 'confirmed',
      context: 'Sarah confirmed: "Onboarding V2 first"',
    },
    {
      text: 'Daily Zoom standups will be replaced by async Slack standups for a two-week trial.',
      status: 'confirmed',
      context: 'Majority agreed; Priya expressed preference for sync but accepted',
    },
    {
      text: 'Tom will investigate search latency and share findings by Friday.',
      status: 'confirmed',
      context: 'Verbally confirmed by Tom',
    },
  ],

  actionItems: [
    {
      task: 'Investigate search query latency and share root cause findings with the team',
      owner: 'Tom',
      ownerConfidence: 'high',
      dueDate: 'Friday',
    },
    {
      task: 'Finalize onboarding V2 designs once user research findings are received',
      owner: 'Priya',
      ownerConfidence: 'high',
      dueDate: 'Thursday',
    },
    {
      task: 'Confirm with the mobile team whether mobile is in scope for onboarding V2',
      owner: 'Sarah',
      ownerConfidence: 'high',
      dueDate: 'Tomorrow',
    },
    {
      task: 'Set up async standup process in Slack',
      owner: 'Sarah',
      ownerConfidence: 'medium',
    },
    {
      task: 'Deliver user research summary to unblock Priya\'s design work',
      owner: 'Owner unclear',
      ownerConfidence: 'unknown',
      dueDate: 'Wednesday',
    },
    {
      task: 'Implement onboarding V2 frontend flows once designs are finalised',
      owner: 'Mia',
      ownerConfidence: 'high',
    },
    {
      task: 'Run QA testing for onboarding V2 in the final two days of the sprint',
      owner: 'Chris',
      ownerConfidence: 'high',
    },
  ],

  unresolvedItems: [
    {
      description:
        'It is unclear whether the mobile team is included in the onboarding V2 scope. This was raised but not resolved — Sarah said she would confirm the next day.',
      type: 'ambiguity',
      impact: 'high',
    },
    {
      description:
        'The owner of the user research summary is unknown. Lisa was assumed responsible but was absent from the call. No one claimed ownership before the meeting ended.',
      type: 'missing_information',
      impact: 'high',
    },
    {
      description:
        'The search performance issue may affect the export feature in Sprint 23, but this was not confirmed. No mitigation plan was discussed.',
      type: 'open_question',
      impact: 'medium',
    },
    {
      description:
        'The two-week async standup trial has no defined success criteria or review process — it is unclear what "revisit" means at the end of the trial.',
      type: 'ambiguity',
      impact: 'low',
    },
  ],

  risks: [
    {
      description:
        'If mobile scope is not confirmed before Mia starts implementation, the component structure may need to be reworked mid-sprint, causing delays.',
      severity: 'high',
    },
    {
      description:
        'The user research summary has no confirmed owner. If Lisa is unavailable, Priya\'s design work will be blocked and the sprint goal may slip.',
      severity: 'high',
    },
    {
      description:
        'Search latency at 4s average could impact user retention if it affects the Q2 launch features. The root cause is still unconfirmed.',
      severity: 'medium',
    },
  ],

  meetingClarity: {
    score: 6,
    rationale:
      'The meeting had a clear primary goal and some well-assigned actions, but ended with two high-impact blockers unresolved and no formal close or decision log.',
    strengths: [
      'Sprint 23 priority was clearly aligned — onboarding V2 with no ambiguity on the decision',
      'Tom\'s investigation task was explicitly confirmed with a named owner and deadline',
      'The performance refactor deferral was a clear, explicit decision',
    ],
    gaps: [
      'Two high-impact items (mobile scope, research ownership) were left open without a resolution plan',
      'The meeting ended abruptly with no verbal summary of decisions or next steps',
      'Several action items floated without confirmed owners (research summary, standup setup)',
    ],
    recommendations: [
      'Always close with a 2-minute decision recap: what was decided, who owns what, what is still open',
      'Resolve scope questions with dependent teams before sprint kickoff, not during planning',
      'Never leave a task unowned — assign a temporary DRI if the real owner is absent',
    ],
  },

  suggestedFollowUp:
    'Hi team — quick recap from today\'s sprint planning.\n\nSprint 23 goal: Onboarding V2. Performance refactor is deferred.\n\n**Confirmed actions:**\n• Tom → investigate search latency by Friday\n• Priya → finalize designs once research lands (by Thursday)\n• Mia → frontend implementation post-designs\n• Chris → QA in final 2 days\n• Sarah → confirm mobile scope with mobile team by tomorrow\n\n**Still needs resolution:**\n• Who owns the user research summary? (Lisa?) — needed by Wednesday to unblock Priya\n• Mobile scope: in or out for V2? Sarah to confirm.\n\nAsync standups start next week via Slack — Sarah will set it up.\n\nPlease reply to claim any unowned items. — [Your name]',
};

// ─── French mock ──────────────────────────────────────────────────────────────
export const MOCK_RESULT_FR: AnalysisResult = {
  executiveSummary:
    "L'équipe a clôturé le Sprint 22 avec la livraison du tableau de bord v2, bien qu'une régression détectée tard ait retardé la mise en production de deux jours. La planification du Sprint 23 a aligné l'équipe sur l'onboarding V2 comme objectif principal. Plusieurs actions ont été assignées, mais deux dépendances critiques — la propriété de la recherche utilisateur et la confirmation du périmètre mobile — restent non résolues et pourraient impacter le calendrier du sprint.",

  keyDiscussionPoints: [
    'Les requêtes de recherche sont en moyenne à 4 secondes, bien au-dessus de la cible de 800 ms — probablement un problème de requête N+1 (non confirmé)',
    "L'onboarding V2 est l'objectif principal du sprint 23 ; les maquettes sont complètes à 80 %, en attente des résultats de la recherche utilisateur",
    "Le périmètre mobile pour l'onboarding V2 est ambigu et n'a pas été confirmé avec l'équipe mobile",
    'Le responsable du résumé de recherche utilisateur est inconnu — Lisa était supposée l\'être mais était absente',
    "L'équipe a accepté de tester les stand-ups asynchrones via Slack pendant deux semaines",
    'Le refactoring de performance a été explicitement reporté à un sprint ultérieur',
  ],

  confirmedDecisions: [
    {
      text: "L'onboarding V2 est l'objectif principal du Sprint 23.",
      status: 'confirmed',
      context: 'Explicitement confirmé par Sarah et James',
    },
    {
      text: "Le refactoring de performance est reporté — non inclus dans le Sprint 23.",
      status: 'confirmed',
      context: "Sarah a confirmé : « L'onboarding V2 d'abord »",
    },
    {
      text: 'Les stand-ups quotidiens Zoom seront remplacés par des stand-ups asynchrones sur Slack pour un essai de deux semaines.',
      status: 'confirmed',
      context: 'Majorité favorable ; Priya a exprimé une préférence pour le synchrone mais a accepté',
    },
    {
      text: 'Tom va investiguer la latence de recherche et partager ses conclusions vendredi.',
      status: 'confirmed',
      context: 'Confirmé verbalement par Tom',
    },
  ],

  actionItems: [
    {
      task: 'Investiguer la latence des requêtes de recherche et partager les causes racines avec l\'équipe',
      owner: 'Tom',
      ownerConfidence: 'high',
      dueDate: 'Vendredi',
    },
    {
      task: "Finaliser les maquettes de l'onboarding V2 une fois les résultats de recherche reçus",
      owner: 'Priya',
      ownerConfidence: 'high',
      dueDate: 'Jeudi',
    },
    {
      task: "Confirmer avec l'équipe mobile si le mobile est dans le périmètre de l'onboarding V2",
      owner: 'Sarah',
      ownerConfidence: 'high',
      dueDate: 'Demain',
    },
    {
      task: 'Mettre en place le processus de stand-up asynchrone sur Slack',
      owner: 'Sarah',
      ownerConfidence: 'medium',
    },
    {
      task: "Livrer le résumé de recherche utilisateur pour débloquer le travail de design de Priya",
      owner: 'Responsable inconnu',
      ownerConfidence: 'unknown',
      dueDate: 'Mercredi',
    },
    {
      task: "Implémenter les parcours frontend de l'onboarding V2 une fois les maquettes finalisées",
      owner: 'Mia',
      ownerConfidence: 'high',
    },
    {
      task: "Effectuer les tests QA de l'onboarding V2 pendant les deux derniers jours du sprint",
      owner: 'Chris',
      ownerConfidence: 'high',
    },
  ],

  unresolvedItems: [
    {
      description:
        "Le périmètre mobile pour l'onboarding V2 n'est pas défini. La question a été soulevée mais non résolue — Sarah a dit qu'elle confirmerait le lendemain.",
      type: 'ambiguity',
      impact: 'high',
    },
    {
      description:
        "Le responsable du résumé de recherche utilisateur est inconnu. Lisa était supposée l'être mais était absente. Personne n'a revendiqué cette tâche avant la fin de la réunion.",
      type: 'missing_information',
      impact: 'high',
    },
    {
      description:
        "Le problème de performance des recherches pourrait affecter la fonctionnalité d'export au Sprint 23, mais cela n'a pas été confirmé. Aucun plan de mitigation n'a été discuté.",
      type: 'open_question',
      impact: 'medium',
    },
    {
      description:
        "L'essai des stand-ups asynchrones n'a pas de critères de succès définis ni de processus de revue — il n'est pas clair ce que signifie « réévaluer » à la fin de l'essai.",
      type: 'ambiguity',
      impact: 'low',
    },
  ],

  risks: [
    {
      description:
        "Si le périmètre mobile n'est pas confirmé avant que Mia commence l'implémentation, la structure des composants devra peut-être être revue en cours de sprint, entraînant des retards.",
      severity: 'high',
    },
    {
      description:
        "Le résumé de recherche utilisateur n'a pas de responsable confirmé. Si Lisa est indisponible, le travail de design de Priya sera bloqué et l'objectif du sprint pourrait glisser.",
      severity: 'high',
    },
    {
      description:
        "Une latence de recherche à 4 secondes en moyenne pourrait impacter la rétention utilisateur si elle affecte les fonctionnalités du lancement Q2. La cause racine n'est pas encore confirmée.",
      severity: 'medium',
    },
  ],

  meetingClarity: {
    score: 6,
    rationale:
      "La réunion avait un objectif principal clair et certaines actions bien assignées, mais s'est terminée avec deux blocages majeurs non résolus et sans clôture formelle ni récapitulatif des décisions.",
    strengths: [
      "La priorité du Sprint 23 était clairement alignée — onboarding V2 sans ambiguïté sur la décision",
      "La tâche d'investigation de Tom a été confirmée avec un responsable nommé et une échéance",
      'Le report du refactoring de performance était une décision claire et explicite',
    ],
    gaps: [
      "Deux éléments à fort impact (périmètre mobile, propriété de la recherche) ont été laissés ouverts sans plan de résolution",
      'La réunion s\'est terminée abruptement sans récapitulatif verbal des décisions ni des prochaines étapes',
      'Plusieurs actions ont été évoquées sans responsable confirmé (résumé de recherche, mise en place des stand-ups)',
    ],
    recommendations: [
      'Toujours clore avec un récapitulatif de 2 minutes : ce qui a été décidé, qui fait quoi, ce qui reste ouvert',
      'Résoudre les questions de périmètre avec les équipes dépendantes avant le lancement du sprint, pas pendant la planification',
      "Ne jamais laisser une tâche sans responsable — assigner un DRI temporaire si le vrai responsable est absent",
    ],
  },

  suggestedFollowUp:
    "Bonjour à tous — récap rapide de notre session de planification sprint.\n\nObjectif Sprint 23 : Onboarding V2. Le refactoring de performance est reporté.\n\n**Actions confirmées :**\n• Tom → investiguer la latence de recherche d'ici vendredi\n• Priya → finaliser les maquettes dès réception de la recherche (d'ici jeudi)\n• Mia → implémentation frontend après les maquettes\n• Chris → QA les 2 derniers jours\n• Sarah → confirmer le périmètre mobile avec l'équipe mobile d'ici demain\n\n**Points encore à résoudre :**\n• Qui est responsable du résumé de recherche utilisateur ? (Lisa ?) — nécessaire d'ici mercredi pour débloquer Priya\n• Périmètre mobile : inclus ou non dans la V2 ? Sarah doit confirmer.\n\nLes stand-ups asynchrones démarrent la semaine prochaine sur Slack — Sarah s'en occupe.\n\nMerci de répondre pour prendre en charge les actions sans responsable. — [Votre nom]",
};
