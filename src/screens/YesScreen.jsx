import PuppyIllustration from '../components/PuppyIllustration';
import PinkButton from '../components/PinkButton';

/**
 * Screen 3 — The good-girl screen.
 * "That's a good girl!!" with a happy puppy.
 * Click → Screen 4
 */
export default function YesScreen({ onContinue }) {
  return (
    <div className="center-screen good-screen">
      <PuppyIllustration kind="happy" className="happy-puppy" />
      <p className="script good-message">That&apos;s a good girl!!</p>
      <PinkButton onClick={onContinue}>Click</PinkButton>
      <span className="float-heart fh-1" aria-hidden="true">♡</span>
      <span className="float-heart fh-2" aria-hidden="true">♡</span>
      <span className="float-heart fh-3" aria-hidden="true">✿</span>
    </div>
  );
}
