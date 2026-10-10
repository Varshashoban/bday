import GiftBox from '../components/GiftBox';

/**
 * Screen 8 — Surprise gift.
 * "Here's a surprise for you!!!" with a tappable gift box.
 * Tap gift → Screen 9 (with opening animation).
 */
export default function GiftScreen({ onOpen }) {
  return (
    <div className="center-screen gift-screen">
      <p className="script gift-title">Here&apos;s a surprise for you!!!</p>
      <GiftBox onClick={onOpen} />
      <p className="script tap-label">Tap here</p>
    </div>
  );
}
