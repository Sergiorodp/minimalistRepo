export const FEATURE_FLAGS = {
  showSkillsSection: import.meta.env.PUBLIC_SHOW_SKILLS_SECTION !== 'false',
} as const;
