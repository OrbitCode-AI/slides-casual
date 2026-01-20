import { Slide } from '../Slide';

interface TitleSlideProps {
  isNested?: boolean;
  title?: string;
  subtitle?: string;
}

function TitleSlide({
  isNested,
  title = 'Fun Times Ahead!',
  subtitle = 'A casual presentation about awesome stuff',
}: TitleSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section className="title-slide">
        <span className="title-emoji">🎉</span>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </section>
    </Slide>
  );
}

export default function TitleSlidePreview() {
  return <TitleSlide />;
}

export { TitleSlide };
