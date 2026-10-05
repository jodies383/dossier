import { PageHeading } from '../SectionPrimitives.jsx'

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      ['JavaScript', 'Most comfortable'],
      ['Python', 'Explored at CAPACITI through scripting and automation'],
    ],
  },
  {
    title: 'Frontend and mobile',
    skills: [
      ['HTML and CSS', 'Bootcamp and project experience'],
      ['React', 'Workplace incubation, internship and later projects'],
      ['React Native', 'Learned during workplace incubation'],
    ],
  },
  {
    title: 'Databases',
    skills: [
      ['PostgreSQL', 'My main database experience'],
      ['Supabase', 'Used in application projects'],
    ],
  },
  {
    title: 'Development practices and testing',
    skills: [
      ['Agile and TDD', 'Bootcamp training'],
      ['Mocha and Travis CI', 'Used during bootcamp'],
      ['Mobile application testing', 'Internship experience'],
    ],
  },
  {
    title: 'Operating systems',
    skills: [['Linux', ''], ['Windows', ''], ['macOS', '']],
  },
  {
    title: 'IDE',
    skills: [['Visual Studio Code', '']],
  },
  {
    title: 'Version control and deployment',
    skills: [['Git and GitHub', ''], ['Vercel', '']],
  },
]

function SkillsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Page 04 / Technical skills"
        title="My technical toolkit"
        intro="JavaScript is my strongest language. My experience also includes frontend frameworks, databases, testing and working across different operating systems."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <section className="skill-group" key={group.title}>
            <div className="skill-group-heading"><span className="skill-index">0{index + 1}</span></div>
            <h2>{group.title}</h2>
            <ul className="skill-details">
              {group.skills.map(([skill, description]) => (
                <li key={skill}><strong>{skill}</strong>{description && <span>{description}</span>}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}

export default SkillsPage