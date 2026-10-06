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
     
    </>
  )
}

export default FuturePage