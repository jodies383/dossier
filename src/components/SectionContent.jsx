import FuturePage from './pages/FuturePage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'
import LearningPage from './pages/LearningPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import CvPage from './pages/CvPage.jsx'

const sectionViews = {
  profile: ProfilePage,
  journey: JourneyPage,
  projects: ProjectsPage,
  skills: SkillsPage,
  learning: LearningPage,
  future: FuturePage,
  cv: CvPage,
}

export function SectionContent({ sectionId }) {
  const View = sectionViews[sectionId] ?? ProfilePage
  return <View />
}