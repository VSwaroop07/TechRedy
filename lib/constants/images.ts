// Image constants - Industrial standard approach
// Centralized image management for better maintainability

export const IMAGES = {
  logos: {
    techRedy: "/images/logos/techredylogo.png",
    // Add more logos here as needed
  },
  icons: {
    // Add icon paths here
  },
  backgrounds: {
    // Add background image paths here
  },
  placeholders: {
    // Add placeholder image paths here
  },
} as const;

// Type safety for image paths
export type ImageCategory = keyof typeof IMAGES;
export type ImageKey<T extends ImageCategory> = keyof typeof IMAGES[T];
export type ImagePath = string;

// Helper function for image optimization metadata
export const getImageProps = (src: string, alt: string, priority = false) => ({
  src,
  alt,
  priority,
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
});

// Responsive image breakpoints
export const IMAGE_BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
} as const;
