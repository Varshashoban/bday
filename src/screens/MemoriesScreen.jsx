import PolaroidGallery from '../components/PolaroidGallery';
import PinkButton from '../components/PinkButton';

/**
 * Screen 7 — Hanging Polaroid memories.
 * Three photos on a string with clips, "I LOVE YOU 💗".
 * Click here → Screen 8. Tap photo → Lightbox.
 */
export default function MemoriesScreen({ onContinue, onPhotoClick }) {
  return (
    <div className="memories-screen">
      <p className="eyebrow">OUR LITTLE MEMORY LANE</p>
      <h1 className="script memories-title">
        I LOVE YOU <span>💗</span>
      </h1>
      <p className="memories-subtitle">
        You don&apos;t know how much you mean to me
      </p>
      <PolaroidGallery onPhotoClick={onPhotoClick} />
      <PinkButton className="memory-next" onClick={onContinue}>
        Click here <span aria-hidden="true">→</span>
      </PinkButton>
    </div>
  );
}
