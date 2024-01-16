import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutMePage from './pages/AboutMe'
import HomePage from './pages/HomePage'
import RootLayout from './pages/Root'
import ExperiencePage from './pages/Experience'
import EducationPage from './pages/Education'
import CertificatesPage from './pages/Certificates'
import ProjectsPage from './pages/Projects'
import './App.module.css'

const router = createBrowserRouter([
  {
    path: '/hisyam-portfolio/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'about', element: <AboutMePage/>},
      {path: 'experience', element: <ExperiencePage/>},
      {path: 'education', element: <EducationPage/>},
      {path: 'certificates', element: <CertificatesPage/>},
      {path: 'projects', element: <ProjectsPage/>},
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
