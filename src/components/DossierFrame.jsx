import { SectionContent } from './SectionContent.jsx'
import { dossierSections } from '../data/sections.js'
import { NavLink } from 'react-router-dom'

function DossierFrame({ activeSection, section }) {
  const pageNumber = String(
    Math.max(0, section ? section.index : 0) + 1,
  ).padStart(2, '0')

  return (
    <main className="stage">
      <div className="dossier-folder">
        <nav className="folder-tabs" aria-label="Dossier sections">
          {dossierSections.map((item) => (
            <NavLink
              className={({ isActive }) => `folder-tab${isActive ? ' is-active' : ''}`}
              to={`/${item.id}`}
              key={item.id}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <article className="paper" aria-labelledby="section-title">
          <div className="paper-meta">
            <span>Professional dossier</span>
            <span>{pageNumber} / {String(dossierSections.length).padStart(2, '0')}</span>
          </div>
          <div className="paper-content">
            <SectionContent sectionId={activeSection} />
          </div>
       
        </article>
      </div>
    </main>
  )
}

export default DossierFrame