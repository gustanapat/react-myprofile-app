import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import portrait from '../assets/profile.png'
import { profile } from '../portfolio.js'

const socialIcons = [
  { name: 'Facebook', icon: FaFacebook },
  { name: 'X', icon: FaXTwitter },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'LinkedIn', icon: FaLinkedin },
  { name: 'Google', icon: FaGoogle },
]

export default function MyCard() {
  return (
    <aside className="profile-card" aria-label="Profile">
      <p className="profile-name">{profile.name}</p>
      <img className="profile-photo" src={portrait} alt="Illustrated profile portrait" width="1254" height="1254" />
      <p className="student-id">STU ID: {profile.studentId}</p>
      <p className="profile-role">{profile.role}</p>
      <ul className="social-icons" aria-label="Social platforms">
        {socialIcons.map(({ name, icon: Icon }) => (
          <li key={name} title={name}><Icon role="img" aria-label={name} /></li>
        ))}
      </ul>
      <Link className="hire-button" to="/contactme">Hire Me!</Link>
    </aside>
  )
}
