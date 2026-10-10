import PuppyIllustration from '../components/PuppyIllustration';
import PinkButton from '../components/PinkButton';

/**
 * Screen 1 — The opening surprise.
 * "HEY!! I made something for you. Do you want to see?"
 * YES → Screen 3, NO → Screen 2
 */
export default function WelcomeScreen({ onYes, onNo }) {
  return (
    <div className="welcome composition">
      <div className="welcome-copy">
        <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>
        <h1 className="chunky">HEY!!</h1>
        <p className="subheading">I made something for you</p>
        <p className="script prompt">Do you want to see?</p>
        <div className="button-row">
          <PinkButton onClick={onYes}>YES</PinkButton>
          <PinkButton className="button-outline" onClick={onNo}>NO</PinkButton>
        </div>
      </div>
      <PuppyIllustration kind="rose" className="welcome-puppy" />
      <span className="doodle-heart heart-one" aria-hidden="true">♡</span>
      <span className="doodle-heart heart-two" aria-hidden="true">✿</span>
    </div>
  );
}
