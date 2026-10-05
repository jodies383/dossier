import { PageHeading } from '../SectionPrimitives.jsx'

const priorities = [
  'Strengthen and build Java, Angular, React and Python skills.',
  'Become more confident solving technical problems independently.',
  'Improve my debugging and testing.',
  'Deepen my backend knowledge.',
  'Learn how professional teams build and maintain production software.',
]

function FuturePage() {
  return (
    <>
      <PageHeading
        eyebrow="Page 06 / Where I'm going"
        title="Where I'm going"
        intro="I want to become a developer who can take ownership of work and be someone a team can depend on."
      />
      <h2 className="subsection-title priorities-title">My next priorities</h2>
      <div className="priority-list">
        {priorities.map((priority, index) => (
          <article className="priority-item" key={priority}>
            <span className="future-number">0{index + 1}</span>
            <div><p>{priority}</p></div>
          </article>
        ))}
      </div>
      <section className="long-term-goal">
        <h2>I've gone from having no coding experience to contributing to applications and becoming comfortable leading within a team. I'm proud of that progress, and I'm willing to keep putting in the work to build on it.</h2>
      </section>
    </>
  )
}

export default FuturePage