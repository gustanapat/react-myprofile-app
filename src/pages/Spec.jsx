import { LuCodeXml, LuGlobe, LuPenTool } from 'react-icons/lu'

const specializations = [
  { title: 'Front end-developer', description: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.', icon: LuCodeXml },
  { title: 'UI/UX Designer', description: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.', icon: LuGlobe },
  { title: 'Graphic designer', description: 'As a graphic designer, I transform ideas into visually striking and impactful designs.', icon: LuPenTool },
]

export default function Spec() {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title">My <span>Specializations</span></h1>
      <ul className="specialization-list">
        {specializations.map(({ title, description, icon: Icon }) => (
          <li key={title}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
