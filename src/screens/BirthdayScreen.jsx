import PuppyIllustration from '../components/PuppyIllustration';
import PinkButton from '../components/PinkButton';
import FloatingHearts from '../components/FloatingHearts';

/**
 * Screen 4 — Birthday reveal.
 * "HAPPY BIRTHDAY BBG 💗" with birthday puppy and confetti hearts.
 * Next → Screen 5
 */
export default function BirthdayScreen({ onNext }) {
  return (
    <div className="birthday-screen">
      <FloatingHearts count={10} />
      <PuppyIllustration kind="birthday" className="birthday-puppy" />
      <div className="birthday-copy">
        <p className="eyebrow">TODAY IS ALL ABOUT YOU</p>
        <h1 className="chunky rose-heading">
          HAPPY BIRTHDAY BBG <span>💗</span>
        </h1>
        <p className="birthday-line">YOU ARE MY FAVOURITE NOTIFICATION</p>
        <p className="script birthday-script">STAY CUTE, STAY HAPPY, STAY MINE</p>
      </div>
      <PinkButton className="next-button" onClick={onNext}>
        Next <span aria-hidden="true">→</span>
      </PinkButton>
    </div>
  );
}
