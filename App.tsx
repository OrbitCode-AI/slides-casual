import { useEffect, useRef, useState } from 'preact/hooks';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/sky.css';
import './styles.css';

import { TitleSlide } from './slides/01-Title';
import { IntroSlide } from './slides/02-Intro';
import { TopicsSlide } from './slides/03-Topics';
import { FunFactsSlide } from './slides/04-FunFacts';
import { InteractiveSlide } from './slides/05-Interactive';
import { EndSlide } from './slides/06-End';

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [_slideState, setSlideState] = useState({ h: 0, v: 0, f: -1 });

  useEffect(() => {
    if (!deckRef.current) return;

    const deck = new Reveal(deckRef.current, {
      controls: true,
      progress: true,
      hash: false,
      embedded: true,
      transition: 'convex',
    });

    deck.on('slidechanged', () => {
      const indices = deck.getIndices();
      setSlideState({ h: indices.h, v: indices.v, f: indices.f ?? -1 });
    });

    deck.initialize();

    const resizeObserver = new ResizeObserver(() => {
      if (deck.isReady()) (deck as any).layout();
    });
    resizeObserver.observe(deckRef.current);

    return () => {
      resizeObserver.disconnect();
      try { deck.destroy(); } catch {}
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef} style={{ position: 'fixed', inset: 0 }}>
      <div className="slides">
        <TitleSlide isNested />
        <IntroSlide isNested />
        <TopicsSlide isNested />
        <FunFactsSlide isNested />
        <InteractiveSlide isNested />
        <EndSlide isNested />
      </div>
    </div>
  );
}
