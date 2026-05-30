export const badge = {
  variants: {
    default: { background: 'var(--tdgs-neutral-100)',           text: 'var(--tdgs-neutral-700)',           border: 'var(--tdgs-neutral-200)'           },
    info:    { background: 'var(--tdgs-semantic-info-bg)',    text: 'var(--tdgs-semantic-info-text)',    border: 'var(--tdgs-semantic-info-border)'    },
    success: { background: 'var(--tdgs-semantic-success-bg)', text: 'var(--tdgs-semantic-success-text)', border: 'var(--tdgs-semantic-success-border)' },
    warning: { background: 'var(--tdgs-semantic-warning-bg)', text: 'var(--tdgs-semantic-warning-text)', border: 'var(--tdgs-semantic-warning-border)' },
    danger:  { background: 'var(--tdgs-semantic-danger-bg)',  text: 'var(--tdgs-semantic-danger-text)',  border: 'var(--tdgs-semantic-danger-border)'  },
  },
  sizes: {
    sm: { fontSize: 'var(--tdgs-font-size-xs)', padding: '0.1rem 0.375rem' },
    md: { fontSize: 'var(--tdgs-font-size-xs)', padding: '0.2rem 0.5rem'   },
  },
} as const;

export type BadgeVariant = keyof typeof badge.variants;
export type BadgeSize = keyof typeof badge.sizes;
export type BadgeTokens = typeof badge;
export default badge;
