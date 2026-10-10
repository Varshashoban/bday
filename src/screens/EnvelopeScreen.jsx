import Envelope from '../components/Envelope';

/**
 * Screen 5 — The surprise envelope.
 * Beautiful blush-pink envelope with "Tap here to open".
 * Tap envelope → Screen 6
 */
export default function EnvelopeScreen({ onOpen }) {
  return (
    <div className="center-screen envelope-screen">
      <p className="eyebrow">A LETTER JUST FOR YOU</p>
      <Envelope onClick={onOpen} />
      <span className="tiny-note script">sealed with all my love</span>
    </div>
  );
}
