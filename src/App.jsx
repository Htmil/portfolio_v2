//*Imports
import {Route, Routes} from 'react-router-dom'
import './App.css'

//*Layouts
import Layout from './layouts/Layout'
//*Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Curriculum from './pages/Curriculum'
import NotFound from './pages/NotFound'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

