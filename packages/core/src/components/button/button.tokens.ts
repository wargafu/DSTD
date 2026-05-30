/**
 * TDGS button tokens
 *
 * Ce fichier formalise les variantes, tailles et comportements officiels du système
 * de boutons TDGS. Il reste sobre, accessible et aligné sur les tokens existants.
 */
export const button = {
  defaults: {
    variant: 'primary' as const,
    size: 'md' as const,
    fontFamily: 'var(--tdgs-font-family-primary)',
    fontWeight: 'var(--tdgs-text-button-weight)',
    textTransform: 'none' as const,
    transition: 'background-color var(--tdgs-motion-fast) var(--tdgs-easing-standard), color var(--tdgs-motion-fast) var(--tdgs-easing-standard), border-color var(--tdgs-motion-fast) var(--tdgs-easing-standard), box-shadow var(--tdgs-motion-fast) var(--tdgs-easing-standard)',
    focusOutline: '2px solid var(--tdgs-color-blue-500)',
    focusOutlineOffset: '3px',
    minHeight: 'var(--tdgs-button-min-height)'
  },
  variants: {
    primary: {
      background: 'var(--tdgs-button-primary-bg)',
      text: 'var(--tdgs-button-primary-text)',
      border: 'var(--tdgs-button-primary-border)',
      hoverBackground: 'var(--tdgs-button-primary-hover-bg)',
      hoverBorder: 'var(--tdgs-button-primary-hover-border)',
      activeBackground: 'var(--tdgs-button-primary-active-bg)',
      activeBorder: 'var(--tdgs-button-primary-active-border)',
      disabledBackground: 'var(--tdgs-button-disabled-bg)',
      disabledText: 'var(--tdgs-button-disabled-text)',
      disabledBorder: 'var(--tdgs-button-disabled-border)'
    },
    secondary: {
      background: 'var(--tdgs-button-secondary-bg)',
      text: 'var(--tdgs-button-secondary-text)',
      border: 'var(--tdgs-button-secondary-border)',
      hoverBackground: 'var(--tdgs-button-secondary-hover-bg)',
      hoverBorder: 'var(--tdgs-button-secondary-hover-border)',
      activeBackground: 'var(--tdgs-button-secondary-active-bg)',
      activeBorder: 'var(--tdgs-button-secondary-active-border)',
      disabledBackground: 'var(--tdgs-button-disabled-bg)',
      disabledText: 'var(--tdgs-button-disabled-text)',
      disabledBorder: 'var(--tdgs-button-disabled-border)'
    },
    tertiary: {
      background: 'var(--tdgs-button-tertiary-bg)',
      text: 'var(--tdgs-button-tertiary-text)',
      border: 'var(--tdgs-button-tertiary-border)',
      hoverBackground: 'var(--tdgs-button-tertiary-hover-bg)',
      hoverBorder: 'var(--tdgs-button-tertiary-hover-border)',
      activeBackground: 'var(--tdgs-button-tertiary-active-bg)',
      activeBorder: 'var(--tdgs-button-tertiary-active-border)',
      disabledBackground: 'var(--tdgs-button-disabled-bg)',
      disabledText: 'var(--tdgs-button-disabled-text)',
      disabledBorder: 'var(--tdgs-button-disabled-border)'
    },
    danger: {
      background: 'var(--tdgs-button-danger-bg)',
      text: 'var(--tdgs-button-danger-text)',
      border: 'var(--tdgs-button-danger-border)',
      hoverBackground: 'var(--tdgs-button-danger-hover-bg)',
      hoverBorder: 'var(--tdgs-button-danger-hover-border)',
      activeBackground: 'var(--tdgs-button-danger-active-bg)',
      activeBorder: 'var(--tdgs-button-danger-active-border)',
      disabledBackground: 'var(--tdgs-button-disabled-bg)',
      disabledText: 'var(--tdgs-button-disabled-text)',
      disabledBorder: 'var(--tdgs-button-disabled-border)'
    },
    success: {
      background: 'var(--tdgs-button-success-bg)',
      text: 'var(--tdgs-button-success-text)',
      border: 'var(--tdgs-button-success-border)',
      hoverBackground: 'var(--tdgs-button-success-hover-bg)',
      hoverBorder: 'var(--tdgs-button-success-hover-border)',
      activeBackground: 'var(--tdgs-button-success-active-bg)',
      activeBorder: 'var(--tdgs-button-success-active-border)',
      disabledBackground: 'var(--tdgs-button-disabled-bg)',
      disabledText: 'var(--tdgs-button-disabled-text)',
      disabledBorder: 'var(--tdgs-button-disabled-border)'
    }
  },
  sizes: {
    sm: {
      fontSize: 'var(--tdgs-button-font-size-sm)',
      lineHeight: 'var(--tdgs-button-line-height-sm)',
      padding: 'var(--tdgs-button-padding-sm)',
      minHeight: 'var(--tdgs-button-min-height)',
      radius: 'var(--tdgs-button-radius-sm)'
    },
    md: {
      fontSize: 'var(--tdgs-button-font-size-md)',
      lineHeight: 'var(--tdgs-button-line-height-md)',
      padding: 'var(--tdgs-button-padding-md)',
      minHeight: 'var(--tdgs-button-min-height)',
      radius: 'var(--tdgs-button-radius-md)'
    },
    lg: {
      fontSize: 'var(--tdgs-button-font-size-lg)',
      lineHeight: 'var(--tdgs-button-line-height-lg)',
      padding: 'var(--tdgs-button-padding-lg)',
      minHeight: 'var(--tdgs-button-min-height)',
      radius: 'var(--tdgs-button-radius-md)'
    }
  },
  states: {
    focus: {
      outline: 'var(--tdgs-button-focus-outline)',
      outlineOffset: 'var(--tdgs-button-focus-outline-offset)'
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: '0.75'
    },
    loading: {
      cursor: 'progress'
    }
  }
} as const;

export type ButtonVariant = keyof typeof button.variants;
export type ButtonSize = keyof typeof button.sizes;
export type ButtonTokens = typeof button;
export default button;
