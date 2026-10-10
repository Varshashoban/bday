import SafeImage from './SafeImage';

const puppyImages = {
  rose: 'puppy-rose.png',
  angry: 'puppy-angry.png',
  happy: 'puppy-happy.png',
  birthday: 'puppy-birthday.png',
};

const puppyLabels = {
  rose: 'A golden puppy offering a red rose',
  angry: 'A fluffy white puppy with a comically angry face',
  happy: 'A happy golden puppy surrounded by hearts',
  birthday: 'A puppy in a party hat beside a birthday cake',
};

/**
 * PuppyIllustration — renders the right puppy image for each screen.
 * Falls back to a puppy emoji if the image isn't available.
 */
export default function PuppyIllustration({ kind, className = '' }) {
  return (
    <SafeImage
      src={puppyImages[kind]}
      alt={puppyLabels[kind]}
      className={`puppy ${className}`}
      fallback="🐶"
    />
  );
}
