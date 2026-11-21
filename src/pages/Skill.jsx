import { FaCss3Alt, FaFigma, FaGithub, FaReact } from 'react-icons/fa6'
import { SiNextdotjs, SiNodedotjs } from 'react-icons/si'

const skills = [
  { name: 'React', percent: 60, icon: FaReact, highlight: true },
  { name: 'Figma', percent: 85, icon: FaFigma },
  { name: 'HTML/CSS', percent: 80, icon: FaCss3Alt },
  { name: 'Next.js', percent: 80, icon: SiNextdotjs },
  { name: 'JavaScript', percent: 60, icon: SiNodedotjs },
  { name: 'GitHub', percent: 90, icon: FaGithub },
]

export default function Skill() {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title">My <span>Skills</span></h1>
      <ul className="skill-list">
        {skills.map(({ name, percent, icon: Icon, highlight }) => (
          <li key={name} className={highlight ? 'skill-highlight' : undefined}>
            <div className="skill-badge">
              <Icon aria-hidden="true" />
              <span>{percent}%</span>
            </div>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
