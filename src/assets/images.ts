// Import all images
import neonLogo from './images/neon-logo.png';
import slide1 from './images/slide1.webp';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.png';

// Export images with types
export const images = {
  logo: neonLogo,
  slides: {
    slide1,
    slide2,
    slide3
  }
} as const;

// Export type for image keys
export type ImageKeys = keyof typeof images;
export type SlideKeys = keyof typeof images.slides;
