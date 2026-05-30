export const spacing = {
  scale: {
    0: '0rem',     // 0px
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    14: '3.5rem',  // 56px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem',    // 96px
    28: '7rem',    // 112px
    32: '8rem',    // 128px
    40: '10rem',   // 160px
    48: '12rem',   // 192px
    56: '14rem',   // 224px
    64: '16rem',   // 256px
    80: '20rem',   // 320px
    96: '24rem'    // 384px
  },
  px: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
    80: 320,
    96: 384
  }
} as const;

export type SpacingTokens = typeof spacing;
export default spacing;
