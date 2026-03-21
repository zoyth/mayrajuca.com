// ABOUTME: Theme configuration for Mayra Jucá / Plural MJ portfolio site.
// ABOUTME: Defines colors, fonts, and design tokens matching the portfolio's visual identity.

import type { ThemeConfigV2 } from '@zoyth/simple-site-framework';

export const theme: ThemeConfigV2 = {
  version: 2,
  brand: {
    name: 'Mayra Jucá',
    palette: {
      orange: '#D97706',
      tan: '#D4C4B0',
      charcoal: '#1A1A1A',
    },
    shadeBase: '#1A1A1A',
    shadeLight: '#FAFAFA',
    fonts: {
      heading: {
        family: 'Montserrat',
        weights: [400, 700, 900],
        fallback: 'sans-serif',
      },
      body: {
        family: 'Inter',
        weights: [300, 400, 500, 600],
        fallback: 'sans-serif',
      },
    },
  },
  design: {
    borderRadius: 'rounded',
    shadows: 'subtle',
    spacing: 'comfortable',
  },
};
