import PuppyIllustration from '../components/PuppyIllustration';
import PinkButton from '../components/PinkButton';

/**
 * Screen 2 — The funny rejection screen.
 * "HOW DARE YOU" with an angry puppy.
 * Go back → Screen 1
 */
export default function NoScreen({ onGoBack }) {
  return (
    <div className="center-screen no-screen">
      <span className="anger" aria-hidden="true">💢</span>
      <PuppyIllustration kind="angry" className="angry-puppy" />
      <h1 className="chunky rose-heading">HOW DARE YOU</h1>
      <PinkButton onClick={onGoBack}>Go back</PinkButton>
    </div>
  );
}
