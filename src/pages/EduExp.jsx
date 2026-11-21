const experience = [
  { period: '2022 – Present', roles: [['UI/UX Designer', 'Freelance'], ['Fullstack Web Developer', 'Freelance']] },
  { period: '2022 – 2025', roles: [['Bachelor Degree in Technology Digital and Innovation', 'Southeast Asia University']] },
  { period: '2016 – 2021', roles: [['High school', 'Taweethapisek School']] },
]

export default function EduExp() {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title">Education &amp; <span>Experience</span></h1>
      <ol className="experience-list">
        {experience.map(({ period, roles }) => (
          <li key={period}>
            <p className="experience-period">{period}</p>
            {roles.map(([title, organization]) => (
              <div key={title} className="experience-role">
                <h2>{title}</h2>
                <p>{organization}</p>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </section>
  )
}
