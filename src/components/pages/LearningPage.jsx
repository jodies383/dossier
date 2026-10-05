import { PageHeading } from '../SectionPrimitives.jsx'

const qualifications = [
  {
    title: 'Software Development',
    provider: 'CAPACITI / Coursera',
    completion: 'Completed August 2026',
  },
  {
    title: 'Google AI Essentials Specialization',
    provider: 'CAPACITI / Coursera',
    completion: 'Completion records: May and July 2026',
  },
  {
    title: 'Professional Development',
    provider: 'CAPACITI / Coursera',
    completion: 'Completed August 2026',
  },
  {
    title: 'Google IT Automation with Python',
    provider: 'CAPACITI / Coursera',
    completion: 'Completed September 2026',
  },
  {
    title: 'Artificial Intelligence Bootcamp (AI)',
    provider: 'CAPACITI / Coursera',
    completion: 'Completed May 2026',
  },
]

const growthNotes = [
  {
    title: 'Learning through practice',
    detail: 'My route into development has been hands-on. Training gave me a foundation, and projects and workplace experience gave me opportunities to use it.',
  },
  {
    title: 'Self-learning',
    detail: 'I enjoy exploring unfamiliar tools when a project gives me a reason to learn them. Trying things out helps me understand how they work and where I need to improve.',
  },
  {
    title: 'Leadership',
    detail: "At CAPACITI, I often took on a leadership role in my team and became quite comfortable with it. I've come to recognise that as another way I can contribute, alongside development.",
  },
  {
    title: 'Determination',
    detail: "My journey hasn't been without personal setbacks. There have been times when progress was harder, but my commitment to learning and building a career in technology has remained.",
  },
]

function LearningPage() {
  return (
    <>
      <PageHeading
        eyebrow="Page 05 / Learning and growth"
        title="Learning and growth"
        intro="Training gave me a foundation, and projects and workplace experience gave me opportunities to use it."
      />
      <section className="qualifications-section" aria-labelledby="qualifications-heading">
        <h2 className="subsection-title" id="qualifications-heading">Qualifications</h2>
        <ul className="qualification-list">
          {qualifications.map((qualification, index) => (
            <li className="qualification-item" key={qualification.title}>
              <span className="skill-index">0{index + 1}</span>
              <div className="qualification-copy">
                <h3>{qualification.title}</h3>
                <p>{qualification.provider}</p>
              </div>
              <span className="qualification-completion">{qualification.completion}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="growth-grid">
        {growthNotes.map((note, index) => (
          <section key={note.title}>
            <span className="skill-index">0{index + 1}</span>
            <h2>{note.title}</h2>
            <p>{note.detail}</p>
          </section>
        ))}
      </div>
    </>
  )
}

export default LearningPage