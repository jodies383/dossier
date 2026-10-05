import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import DossierFrame from './components/DossierFrame.jsx'
import { dossierSections } from './data/sections.js'
import './App.css'

function SectionRoute() {
  const { sectionId } = useParams()
  const section = dossierSections.find((item) => item.id === sectionId)

  if (!section) {
    return <Navigate to="/profile" replace />
  }

  return <DossierFrame activeSection={section.id} section={section} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" replace />} />
      <Route path="/:sectionId" element={<SectionRoute />} />
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Routes>
  )
}

export default App