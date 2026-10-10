import SafeImage from '../components/SafeImage';
import PinkButton from '../components/PinkButton';
import FloatingHearts from '../components/FloatingHearts';

/**
 * Screen 9 — Virtual hug finale.
 * Sweet closing screen with hug illustration, floating hearts,
 * and a heartfelt note from Ammu.
 * Replay → Screen 1, View memories → Screen 7.
 */
export default function HugScreen({ onReplay, onViewMemories }) {
  return (
    <div className="final-screen">
      <FloatingHearts count={15} />
      <SafeImage
        src="virtual-hug.png"
        alt="Two friends sharing a warm hug"
        className="hug-image"
        fallback="🫂"
      />
      <h1 className="script hug-title">Here is a virtual hug for you</h1>
      <p className="final-note">
        A little reminder that you&apos;ll always have me.
        <br />
        <span className="script">Love, Ammu 💗</span>
      </p>
      <div className="final-actions">
        <PinkButton className="button-outline" onClick={onViewMemories}>
          View memories
        </PinkButton>
        <PinkButton onClick={onReplay}>Replay</PinkButton>
      </div>
    </div>
  );
}
