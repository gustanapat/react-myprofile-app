import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import MyCard from './components/MyCard.tsx'
import SideMenu from './components/SideMenu.tsx'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'
import EduExp from './pages/EduExp.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skill from './pages/Skill.jsx'
import Spec from './pages/Spec.jsx'
import { navigation, profile } from './portfolio.js'
import './App.css'

const pages = {
  '/': Home,
  '/about': AboutMe,
  '/eduexp': EduExp,
  '/spec': Spec,
  '/projects': Projects,
  '/skills': Skill,
  '/contactme': ContactMe,
}

function Portfolio() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = navigation.find(({ path }) => path === pathname)
    document.title = page && page.path !== '/'
      ? `${page.label} | ${profile.name}`
      : `${profile.name} | Portfolio`
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <MyCard />
      <SideMenu />
      <main className="page-content" id="main-content" tabIndex={-1}>
        <Routes>
          {navigation.map(({ path }) => {
            const Page = pages[path]
            return <Route key={path} path={path} element={<Page />} />
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  )
}
