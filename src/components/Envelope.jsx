/**
 * Envelope — a CSS-built blush-pink envelope with flap, seal, and bow.
 * The entire element is clickable and responds to hover/tap.
 */
export default function Envelope({ onClick }) {
  return (
    <button
      className="envelope-wrap"
      onClick={onClick}
      aria-label="Open your birthday letter"
    >
      <span className="envelope-hint script">Tap here to open</span>
      <span className="envelope" aria-hidden="true">
        <span className="envelope-paper">💌</span>
        <span className="envelope-flap" />
        <span className="envelope-seal">♡</span>
        <span className="envelope-bow">🎀</span>
      </span>
    </button>
  );
}
