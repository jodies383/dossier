export function PageHeading({ eyebrow, title, intro }) {
  return (
    <header className="page-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 id="section-title">{title}</h1>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

export function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}