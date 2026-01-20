import { Slide } from '../Slide';

interface IntroSlideProps {
  isNested?: boolean;
}

function IntroSlide({ isNested }: IntroSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>Hey there! 👋</h2>
        <p className="big-text fragment">Let's make this presentation fun!</p>
        <div className="emoji-row fragment">
          <span>🚀</span>
          <span>✨</span>
          <span>🎯</span>
          <span>💡</span>
        </div>
      </section>
    </Slide>
  );
}

export default function IntroSlidePreview() {
  return <IntroSlide />;
}

export { IntroSlide };
