import { LuCalculator, LuCarFront, LuClipboardPlus, LuGauge, LuGlobe, LuSearch } from 'react-icons/lu'

const calculators = [
  { name: 'BMI (ดัชนีมวลกาย)', icon: LuGauge, color: 'mint' },
  { name: 'BMR (อัตราการเผาผลาญพื้นฐาน)', icon: LuClipboardPlus, color: 'orange' },
  { name: 'Car (คำนวณค่างวดรถยนต์)', icon: LuCarFront, color: 'blue' },
]

function ProjectPreview() {
  return (
    <figure className="project-preview" aria-label="Preview of the online calculator project shown in Figma">
      <div className="preview-toolbar" aria-hidden="true">
        <span className="preview-address"><LuGlobe /> localhost:3030</span>
        <LuSearch />
      </div>
      <div className="preview-body" lang="th">
        <div className="preview-app-icon" aria-hidden="true"><LuCalculator /></div>
        <strong className="preview-title">เครื่องคำนวณออนไลน์</strong>
        <ul>
          {calculators.map(({ name, icon: Icon, color }) => (
            <li className={`preview-tile ${color}`} key={name}>
              <span className="preview-tile-icon"><Icon aria-hidden="true" /></span>
              <strong>{name}</strong>
            </li>
          ))}
        </ul>
        <div className="preview-dots" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </figure>
  )
}

export default function Projects() {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title">Featured <span>Projects</span></h1>
      <h2 className="project-name">Manage Task App - fullstack web development</h2>
      <p className="project-description">Here’s my latest project built with Next.js and Laravel, using TailwindCSS on the front-end.</p>
      <ProjectPreview />
    </section>
  )
}
