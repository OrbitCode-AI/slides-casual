import { Slide } from '../Slide'

interface FunFactsSlideProps {
  isNested?: boolean
}

function FunFactsSlide({ isNested }: FunFactsSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section>
        <section>
          <h2>Fun Facts! 🎯</h2>
          <p>Swipe down for more!</p>
        </section>
        <section data-background-color="#ffd93d">
          <h3>Did you know?</h3>
          <p className="big-text">Honey never spoils! 🍯</p>
          <p className="small-text">Archaeologists found 3000-year-old honey still edible</p>
        </section>
        <section data-background-color="#6bcb77">
          <h3>Mind = Blown 🤯</h3>
          <p className="big-text">Octopuses have 3 hearts!</p>
          <p className="small-text">And blue blood!</p>
        </section>
        <section data-background-color="#4d96ff">
          <h3>Here's another one!</h3>
          <p className="big-text">Bananas are berries 🍌</p>
          <p className="small-text">But strawberries aren't! 🍓</p>
        </section>
      </section>
    </Slide>
  )
}

export default function FunFactsSlidePreview() {
  return <FunFactsSlide />
}

export { FunFactsSlide }
