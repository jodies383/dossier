import { PageHeading } from '../SectionPrimitives.jsx'

const journeyStages = [
  {
    label: 'CODING BOOTCAMP',
    title: 'A first step into coding',
    detail: 'Learned vanilla JavaScript, HTML and CSS, with training in Agile methodologies and test-driven development. Used Mocha for testing and Travis CI for continuous integration.',
    status: 'Training',
  },
  {
    label: 'GOOGLE-SPONSORED WORKPLACE INCUBATION / 6 MONTHS',
    title: 'Learning through a real problem',
    detail: 'Learned React and React Native and helped create a loyalty card app inspired by our local coffee shop.',
    status: '6 months',
  },
  {
    label: 'WEB HOSTING INTERNSHIP / 6 MONTHS',
    title: 'Contributing in a workplace',
    detail: 'Worked mainly on frontend development, refreshing the company website with React and contributing to mobile testing and UI improvements.',
    status: '6 months',
  },
  {
    label: 'CAPACITI / 2026',
    title: 'Learning and leading with a team',
    detail: 'Continued my technical learning, explored Python and frequently took on a leadership role in team projects.',
    status: '6 months',
  },
]

function JourneyPage() {
  return (
    <>
      <PageHeading
        eyebrow="Page 02 / My journey"
        title="My journey into development"
      />
      <ol className="journey-list">
        {journeyStages.map((stage) => (
          <li className="journey-item" key={stage.label}>
            <span className="journey-marker" aria-hidden="true" />
            <div className="journey-copy">
              <p className="mono-label">{stage.label}</p>
              <h2>{stage.title}</h2>
              <p>{stage.detail}</p>
            </div>
            <span className="status-label">{stage.status}</span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default JourneyPage