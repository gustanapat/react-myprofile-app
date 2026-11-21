import { sampleBio } from '../portfolio.js'

export default function AboutMe() {
  return (
    <section aria-labelledby="page-title">
      <p className="page-kicker">About <span>Me</span></p>
      <h1 id="page-title">I find fulfillment in blending visual design with the power of coding to create meaningful experiences.</h1>
      <p className="page-description">{sampleBio} {sampleBio}</p>
    </section>
  )
}
