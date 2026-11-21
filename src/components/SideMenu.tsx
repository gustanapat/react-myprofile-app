import { NavLink } from 'react-router-dom'
import { navigation } from '../portfolio.js'

export default function SideMenu() {
  return (
    <nav className="side-menu" aria-label="Portfolio navigation">
      {navigation.map(({ path, label, icon: Icon }) => (
        <NavLink key={path} to={path} end aria-label={label} title={label}>
          <Icon aria-hidden="true" />
        </NavLink>
      ))}
    </nav>
  )
}
