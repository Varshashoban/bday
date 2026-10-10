import { useState } from 'react';

/**
 * GiftBox — a CSS-drawn gift with lid that lifts on hover/click.
 * When clicked, plays a short opening animation before navigating.
 */
export default function GiftBox({ onClick }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      onClick();
    }, 600);
  };

  return (
    <button
      className={`gift-wrap ${opening ? 'gift-opening' : ''}`}
      aria-label="Open your surprise gift"
      onClick={handleClick}
    >
      <span className="gift-lid">
        <i className="bow bow-left" />
        <i className="bow bow-right" />
      </span>
      <span className="gift-box">
        <i className="gift-ribbon" />
      </span>
      {opening && (
        <span className="gift-sparkles" aria-hidden="true">
          <span className="sparkle sparkle-1">✦</span>
          <span className="sparkle sparkle-2">♡</span>
          <span className="sparkle sparkle-3">✧</span>
          <span className="sparkle sparkle-4">♡</span>
          <span className="sparkle sparkle-5">✦</span>
        </span>
      )}
    </button>
  );
}
