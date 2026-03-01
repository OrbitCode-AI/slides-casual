import { Slide } from '../Slide'

interface InteractiveSlideProps {
  isNested?: boolean
}

function InteractiveSlide({ isNested }: InteractiveSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>Quick Poll! 📊</h2>
        <p>What's your favorite?</p>
        <div className="poll-options">
          <div className="poll-option fragment">
            <span className="poll-emoji">☕</span>
            <span>Coffee</span>
          </div>
          <div className="poll-option fragment">
            <span className="poll-emoji">🍵</span>
            <span>Tea</span>
          </div>
          <div className="poll-option fragment">
            <span className="poll-emoji">🧃</span>
            <span>Juice</span>
          </div>
        </div>
        <p className="fragment small-text">Raise your hand! ✋</p>
      </section>
    </Slide>
  )
}

export default function InteractiveSlidePreview() {
  return <InteractiveSlide />
}

export { InteractiveSlide }
