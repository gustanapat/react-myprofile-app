import { profile, sampleBio } from '../portfolio.js'

export default function Home() {
  return (
    <section aria-labelledby="page-title">
      <p className="page-kicker">Let’s Work <span>Together!</span></p>
      <h1 id="page-title">Hi From <span>{profile.name}</span>,<br />Interactive Designer &amp; Fullstack Web Developer</h1>
      <p className="page-description">{sampleBio}</p>
      <dl className="home-stats">
        <div><dt>Years of<br />Experience</dt><dd>3+</dd></div>
        <div><dt>Projects<br />Completed</dt><dd>10+</dd></div>
      </dl>
    </section>
  )
}
