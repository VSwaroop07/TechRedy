"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

/**
 * Industrial standard image component with:
 * - Error handling with fallback
 * - Loading states
 * - Optimization for static exports
 * - Accessibility compliance
 */
export default function OptimizedImage({
  src,
  alt,
  fallback = "/images/placeholder.svg",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <Image
        src={error ? fallback : src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
}
