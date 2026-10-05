import { PageHeading, TagList } from '../SectionPrimitives.jsx'

const projects = [
  {
    number: '01',
    type: 'WORKPLACE INCUBATION',
    title: 'Loyalty card app',
    detail: 'We kept misplacing our physical loyalty cards at the coffee shop around the corner. During workplace incubation, I helped create an app inspired by that problem while learning React and React Native.',
    tags: ['React', 'React Native'],
  },
  {
    number: '02',
    type: 'WEB HOSTING INTERNSHIP',
    title: 'Company website and mobile app',
    detail: "During my web hosting internship, I helped give the company website a fresh look using React. I also worked on testing and improving the UI of its native mobile app, gaining experience contributing within a professional environment.",
    tags: ['React', 'Mobile testing', 'UI improvements'],
  },
  {
    number: '03',
    type: 'HACKATHON / FOUR-PERSON TEAM',
    title: 'AfriHack 2026',
    detail: 'Participated with a four-person team in developing and presenting a financial services solution. It was an opportunity to apply our project experience in a hackathon setting and communicate what we had built.',
    tags: ['Teamwork', 'Financial services', 'Presentation'],
  },
]

function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Page 03 / Projects and experience"
        title="Projects and experience"
      />
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-copy">
              <p className="mono-label">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.detail}</p>
            </div>
            <TagList items={project.tags} />
          </article>
        ))}
      </div>
    </>
  )
}

export default ProjectsPage