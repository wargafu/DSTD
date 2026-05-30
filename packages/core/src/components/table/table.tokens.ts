export const table = {
  defaults: {
    headerBackground: 'var(--tdgs-neutral-100)',
    headerText: 'var(--tdgs-neutral-800)',
    borderColor: 'var(--tdgs-neutral-200)',
    stripedBackground: 'var(--tdgs-neutral-100)',
    cellPadding: 'var(--tdgs-spacing-3) var(--tdgs-spacing-4)',
  },
} as const;

export type TableTokens = typeof table;
export default table;
