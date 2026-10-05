import portrait from '../../assets/jodie-solomons.jpg'
import { TagList } from '../SectionPrimitives.jsx'

function ProfilePage() {
  return (
    <>
      <div className="profile-masthead">
        <header className="profile-intro">
          <h1 id="section-title">Jodie Solomons</h1>
          <p className="profile-role">Software Developer</p>
          <p className="profile-lead">I learn by doing, and I enjoy having something tangible to show for what I've learned.</p>
        </header>
        <figure className="profile-portrait">
          <img src={portrait} alt="Portrait of Jodie Solomons" />
          <figcaption>SUBJECT / JS-01</figcaption>
        </figure>
      </div>
      <div className="profile-story">
        <p>My experience includes a coding bootcamp, workplace incubation, a web hosting internship and CAPACITI. I've contributed to web and mobile applications and become comfortable taking on a leadership role in my team.</p>
        <p>JavaScript is the language I'm most comfortable with, and most of my experience is in frontend development. I bring a willingness to take responsibility and the determination to keep learning.</p>
      </div>
      <div className="profile-grid">
        <section className="profile-block">
          <h2>What I bring</h2>
          <ul className="focus-list">
            <li>Frontend development experience</li>
            <li>A commitment to self-learning</li>
            <li>The confidence to take responsibility</li>
          </ul>
        </section>
        <section className="profile-block">
          <h2>Experience across</h2>
          <TagList items={['JavaScript', 'Frontend', 'Web apps', 'Mobile apps', 'Backend']} />
        </section>
      </div>
    </>
  )
}


export default ProfilePage