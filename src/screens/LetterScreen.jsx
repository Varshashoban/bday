import SafeImage from '../components/SafeImage';
import PinkButton from '../components/PinkButton';

/**
 * Screen 6 — The heartfelt letter.
 * Scrapbook-style card with a sentimental message, heart photo frame,
 * ribbon decorations, and a small puppy illustration.
 * Click here → Screen 7
 */
export default function LetterScreen({ onContinue }) {
  return (
    <div className="letter-screen">
      <div className="letter-card">
        <div className="tape" aria-hidden="true" />
        <span className="letter-flower" aria-hidden="true">✿</span>
        <span className="letter-ribbon" aria-hidden="true">🎀</span>
        <h1 className="script">My dearest Viru Ma,</h1>
        <p>
          You are seen, you are heard, and you are loved, no matter what.
        </p>
        <p>
          If you ever feel unloved, remember that my love for you is boundless
          and endless.
        </p>
        <div className="letter-bottom">
          <div className="heart-photo">
            <SafeImage
              src="letter-photo.png"
              alt="A favorite photo in a heart-shaped frame"
              fallback="♡"
            />
          </div>
          <SafeImage
            src="letter-puppy.png"
            alt="A little puppy keeping you company"
            className="letter-puppy"
            fallback="🐶"
          />
        </div>
        <p className="script signoff">Always here for you, Ammu ♡</p>
      </div>
      <PinkButton className="letter-next" onClick={onContinue}>
        Click here <span aria-hidden="true">→</span>
      </PinkButton>
    </div>
  );
}
