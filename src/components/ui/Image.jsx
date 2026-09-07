import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * High-performance Image component with:
 * - Lazy loading with Intersection Observer
 * - AVIF/WebP support with fallbacks
 * - Proper srcset and sizes for responsive images
 * - Placeholder and error handling
 * - Blur-up loading effect
 * - Accessibility support
 * - CLS prevention with explicit dimensions
 */
const Image = React.memo(function Image({
  src,
  alt = '',
  width,
  height,
  className = '',
  priority = false, // Skip lazy loading for critical images
  placeholder = 'blur', // 'blur' | 'empty' | 'dominant-color'
  blurDataURL = null,
  sizes = '100vw',
  quality = 75,
  format = 'auto', // 'auto' | 'avif' | 'webp' | 'jpg' | 'png'
  onLoad,
  onError,
  style = {},
  fetchpriority = 'auto', // 'auto' | 'high' | 'low'
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate responsive srcset
  const generateSrcSet = useCallback((baseSrc, format) => {
    if (!baseSrc) return '';
    
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
    const extension = format === 'avif' ? 'avif' :
                     format === 'webp' ? 'webp' :
                     baseSrc.includes('.jpg') || baseSrc.includes('.jpeg') ? 'jpg' : 
                     baseSrc.includes('.png') ? 'png' : 'jpg';
    
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality}&format=${extension} ${w}w`)
      .join(', ');
  }, [quality]);

  // Generate image sources with AVIF/WebP fallback
  const imageSources = useMemo(() => {
    if (!src) return [];

    const sources = [];
    
    // AVIF support (best compression)
    if (format === 'auto' || format === 'avif') {
      sources.push({
        srcSet: generateSrcSet(src, 'avif'),
        type: 'image/avif'
      });
    }
    
    // WebP support (good compression, wide support)
    if (format === 'auto' || format === 'webp') {
      sources.push({
        srcSet: generateSrcSet(src, 'webp'),
        type: 'image/webp'
      });
    }
    
    // Add original format as fallback
    const fallbackFormat = src.includes('.jpg') || src.includes('.jpeg') ? 'jpg' : 
                          src.includes('.png') ? 'png' : 'jpg';
    sources.push({
      srcSet: generateSrcSet(src, fallbackFormat),
      type: `image/${fallbackFormat === 'jpg' ? 'jpeg' : fallbackFormat}`
    });

    return sources;
  }, [src, format, generateSrcSet]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Increased margin for earlier loading
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
    onError?.();
  }, [onError]);

  // Generate placeholder style
  const placeholderStyle = useMemo(() => {
    if (placeholder === 'blur' && blurDataURL) {
      return {
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(20px)',
        transform: 'scale(1.1)',
      };
    }
    if (placeholder === 'dominant-color') {
      return {
        backgroundColor: '#e5e7eb',
      };
    }
    return {};
  }, [placeholder, blurDataURL]);

  // Motion variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height, ...style }}
        role="img"
        aria-label={alt}
        {...props}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        ...style 
      }}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && placeholder !== 'empty' && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={placeholderStyle}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {isInView && (
        <motion.picture
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={variants}
        >
          {imageSources.map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              type={source.type}
              sizes={sizes}
            />
          ))}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={fetchpriority}
          />
        </motion.picture>
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          aria-hidden="true"
        />
      )}
    </div>
  );
});

Image.displayName = 'Image';

export default Image;
