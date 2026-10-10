import { useEffect, useState, useCallback } from 'react';
import Lightbox from './components/Lightbox';
import WelcomeScreen from './screens/WelcomeScreen';
import NoScreen from './screens/NoScreen';
import YesScreen from './screens/YesScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import EnvelopeScreen from './screens/EnvelopeScreen';
import LetterScreen from './screens/LetterScreen';
import MemoriesScreen from './screens/MemoriesScreen';
import GiftScreen from './screens/GiftScreen';
import HugScreen from './screens/HugScreen';

/**
 * App — the root component orchestrating all nine birthday screens.
 *
 * Navigation map:
 *   Screen 1 (Welcome): YES → 3, NO → 2
 *   Screen 2 (No):      Go back → 1
 *   Screen 3 (Yes):     Click → 4
 *   Screen 4 (Birthday): Next → 5
 *   Screen 5 (Envelope): Tap → 6
 *   Screen 6 (Letter):  Click here → 7
 *   Screen 7 (Memories): Click here → 8, Photo → lightbox
 *   Screen 8 (Gift):    Tap → 9
 *   Screen 9 (Hug):     Replay → 1, View memories → 7
 */
export default function App() {
  const [screen, setScreen] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  /** Navigate to a screen with a gentle transition */
  const go = useCallback((next) => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen(next);
      setLightbox(null);
      window.history.pushState({ screen: next }, '', `#screen-${next}`);
      // Scroll to top on screen change
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setTransitioning(false), 50);
    }, 250);
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const onPop = (event) => {
      const s = event.state?.screen ||
        Number(location.hash.match(/screen-(\d)/)?.[1]) || 1;
      setScreen(s);
      setLightbox(null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Escape key closes lightbox
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <WelcomeScreen onYes={() => go(3)} onNo={() => go(2)} />;
      case 2:
        return <NoScreen onGoBack={() => go(1)} />;
      case 3:
        return <YesScreen onContinue={() => go(4)} />;
      case 4:
        return <BirthdayScreen onNext={() => go(5)} />;
      case 5:
        return <EnvelopeScreen onOpen={() => go(6)} />;
      case 6:
        return <LetterScreen onContinue={() => go(7)} />;
      case 7:
        return (
          <MemoriesScreen
            onContinue={() => go(8)}
            onPhotoClick={(photo) => setLightbox(photo)}
          />
        );
      case 8:
        return <GiftScreen onOpen={() => go(9)} />;
      case 9:
        return (
          <HugScreen
            onReplay={() => go(1)}
            onViewMemories={() => go(7)}
          />
        );
      default:
        return <WelcomeScreen onYes={() => go(3)} onNo={() => go(2)} />;
    }
  };

  return (
    <main className={`stage screen-${screen}`}>
      <div className="ribbed-bg" aria-hidden="true" />
      <section
        className={`paper ${transitioning ? 'paper-exit' : ''}`}
        aria-live="polite"
        key={screen}
      >
        <span className="deco deco-top" aria-hidden="true">✿</span>
        <span className="deco deco-side" aria-hidden="true">♡</span>
        {renderScreen()}
      </section>
      <footer className="signature">
        made with love, for Viru Ma <span>♡</span>
      </footer>
      <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />
    </main>
  );
}
