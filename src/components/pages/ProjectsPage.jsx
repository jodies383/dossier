import { PageHeading, TagList } from '../SectionPrimitives.jsx'

const projects = [
  {
    number: '01',
    type: 'MOBILE APP / REACT NATIVE',
    title: 'Stampede',
    detail: 'Built a mobile loyalty and rewards app for businesses and customers, covering registration, business profiles, reward scanning and digital engagement flows. The project helped me build practical React Native experience while thinking through user journeys, product usability and everyday app functionality.',
    tags: ['React Native', 'Expo', 'Firebase', 'Mobile UX'],
    links: [{ label: 'GitHub repo', href: 'https://github.com/Dramatic-Wire/gwi-app' }],
  },
  {
    number: '02',
    type: 'WEB HOSTING INTERNSHIP',
    title: 'Company website and mobile app',
    detail: "During my web hosting internship, I helped refresh the company website using React and contributed to the native mobile app by testing flows and improving the UI in a real professional setting.",
    tags: ['React', 'Mobile testing', 'UI improvements'],
  },
  {
    number: '03',
    type: 'HACKATHON / FOUR-PERSON TEAM',
    title: 'Royal Square Financial',
    detail: 'Developed a workflow-driven financial services platform for a brokerage, giving clients and advisers a clear view of actions, responsibilities, due dates and progress. Built as part of a four-person team, the app focused on making complex processes more transparent, easier to navigate and more user-friendly.',
    tags: ['React', 'Supabase', 'Workflow design', 'Client portal'],
    links: [
      { label: 'GitHub repo', href: 'https://github.com/FourLoopCAPACITI/Royal_Square_Financial' },
      { label: 'Live demo', href: 'https://royalsquare2.vercel.app/' },
    ],
  },
  {
    number: '04',
    type: 'AI BOOTCAMP / VIBE-CODED APP',
    title: 'Sentic Insights',
    detail: 'For product, support and CX teams who need to turn unstructured customer feedback into clear, decision-ready sentiment intelligence. A multi-source sentiment analytics platform that ingests text, CSVs, PDFs, URLs and images, then compares VADER and transformer-based scoring so you can quickly identify key drivers, recommendations and trends across history or within a single dataset.',
    tags: ['AI', 'NLP', 'React', 'Analytics'],
    links: [{ label: 'Live demo', href: 'https://senticinsights.lovable.app/' }],
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
              {project.links && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="project-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <TagList items={project.tags} />
          </article>
        ))}
      </div>
    </>
  )
}

export default ProjectsPage