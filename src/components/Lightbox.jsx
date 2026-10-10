import SafeImage from './SafeImage';

/**
 * Lightbox — fullscreen photo viewer with click-to-close.
 */
export default function Lightbox({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Memory photo viewer"
      onClick={onClose}
    >
      <button className="lightbox-close" aria-label="Close photo viewer">
        ×
      </button>
      <SafeImage
        src={photo}
        alt="A favorite memory of two friends"
        className="lightbox-image"
        fallback="♡"
      />
    </div>
  );
}
