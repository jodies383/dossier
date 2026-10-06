import portrait from '../../assets/jodie-solomons.jpg'
import { TagList } from '../SectionPrimitives.jsx'

function ProfilePage() {
  return (
    <>
      <div className="profile-masthead">
        <header className="profile-intro">
          <h1 id="section-title">Jodie Solomons</h1>
          <p className="profile-role">Software Developer</p>
        </header>
        <figure className="profile-portrait">
          <img src={portrait} alt="Portrait of Jodie Solomons" />
          <figcaption>SUBJECT / JS-01</figcaption>
        </figure>
      </div>
      <div className="profile-story">
        <p>I’m a software developer who learns best by building. My strongest language is JavaScript, with frontend experience using React and contributions to web and mobile applications.</p>
        <p>I enjoy turning everyday problems into useful tools. My route from au pairing into development has taken determination, self-learning and a willingness to try something unfamiliar. Through workplace experience and CAPACITI, I’ve also become comfortable taking on leadership responsibilities within a team.</p>
        <p>I bring practical experience, curiosity and a commitment to keep improving, with the goal of becoming a developer people can depend on.</p>
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