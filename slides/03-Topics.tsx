import { Slide } from '../Slide'

interface TopicsSlideProps {
  isNested?: boolean
  topics?: { emoji: string; title: string }[]
}

const defaultTopics = [
  { emoji: '🌟', title: 'Cool Thing #1' },
  { emoji: '🎨', title: 'Creative Stuff' },
  { emoji: '🧪', title: 'Fun Experiments' },
  { emoji: '🎮', title: 'Games & Play' },
]

function TopicsSlide({ isNested, topics = defaultTopics }: TopicsSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <h2>What We'll Cover</h2>
        <div className="topics-grid">
          {topics.map((topic, i) => (
            <div key={i} className="topic-card fragment zoom-in">
              <span className="topic-emoji">{topic.emoji}</span>
              <span className="topic-title">{topic.title}</span>
            </div>
          ))}
        </div>
      </section>
    </Slide>
  )
}

export default function TopicsSlidePreview() {
  return <TopicsSlide />
}

export { TopicsSlide }
