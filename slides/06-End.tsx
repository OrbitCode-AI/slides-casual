import { Slide } from '../Slide'

interface EndSlideProps {
  isNested?: boolean
}

function EndSlide({ isNested }: EndSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section className="end-slide">
        <h1>Thanks! 🙌</h1>
        <p className="big-text">That was fun, right?</p>
        <div className="emoji-row">
          <span className="fragment bounce">👏</span>
          <span className="fragment bounce">🎊</span>
          <span className="fragment bounce">🌈</span>
        </div>
        <p className="fragment">Questions? Let's chat!</p>
      </section>
    </Slide>
  )
}

export default function EndSlidePreview() {
  return <EndSlide />
}

export { EndSlide }
