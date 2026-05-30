export const alert = {
  variants: {
    info: {
      background: 'var(--tdgs-semantic-info-bg)',
      border: 'var(--tdgs-semantic-info-border)',
      text: 'var(--tdgs-semantic-info-text)',
      icon: 'var(--tdgs-semantic-info-icon)',
    },
    success: {
      background: 'var(--tdgs-semantic-success-bg)',
      border: 'var(--tdgs-semantic-success-border)',
      text: 'var(--tdgs-semantic-success-text)',
      icon: 'var(--tdgs-semantic-success-icon)',
    },
    warning: {
      background: 'var(--tdgs-semantic-warning-bg)',
      border: 'var(--tdgs-semantic-warning-border)',
      text: 'var(--tdgs-semantic-warning-text)',
      icon: 'var(--tdgs-semantic-warning-icon)',
    },
    danger: {
      background: 'var(--tdgs-semantic-danger-bg)',
      border: 'var(--tdgs-semantic-danger-border)',
      text: 'var(--tdgs-semantic-danger-text)',
      icon: 'var(--tdgs-semantic-danger-icon)',
    },
  },
} as const;

export type AlertVariant = keyof typeof alert.variants;
export type AlertTokens = typeof alert;
export default alert;
