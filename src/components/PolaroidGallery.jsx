import SafeImage from './SafeImage';

/**
 * PolaroidGallery — three Polaroid photos hanging from a string with clips.
 * Each photo is clickable to open in a lightbox.
 */
const photos = [
  { file: 'memory-1.png', caption: 'my favorite days' },
  { file: 'memory-2.png', caption: 'always us' },
  { file: 'memory-3.png', caption: 'best friends' },
];

export default function PolaroidGallery({ onPhotoClick }) {
  return (
    <div className="memory-gallery">
      <span className="memory-string" aria-hidden="true" />
      <span className="string-heart" aria-hidden="true">♡</span>
      {photos.map((photo, i) => (
        <button
          className={`polaroid polaroid-${i + 1}`}
          key={photo.file}
          onClick={() => onPhotoClick(photo.file)}
          aria-label={`View memory photo ${i + 1}: ${photo.caption}`}
        >
          <span className="clip" aria-hidden="true" />
          <SafeImage
            src={photo.file}
            alt={`A personal memory — ${photo.caption}`}
            fallback="♡"
          />
          <span className="photo-caption">{photo.caption}</span>
        </button>
      ))}
    </div>
  );
}
