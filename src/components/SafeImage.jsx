import { useState } from 'react';

const asset = (name) => `/images/${name}`;

/**
 * SafeImage — renders an <img> with graceful fallback.
 * If the image fails to load, it shows a styled emoji placeholder
 * so you never see a broken-image icon.
 */
export default function SafeImage({ src, alt, className = '', fallback = '♡', style }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        aria-label={alt}
        role="img"
        style={style}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={asset(src)}
      alt={alt}
      onError={() => setFailed(true)}
      loading="lazy"
      style={style}
    />
  );
}
