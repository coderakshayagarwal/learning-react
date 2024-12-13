import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
import AboutDeveloper from './components/aboutDeveloper/AboutDeveloper.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//         path: '',
//         element: <Home />
//       }, {
//         path: 'about',
//         element: <About />
//       }, {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        <Route path='aboutdeveloper' element={<AboutDeveloper />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route
        path='github'
        loader={githubInfoLoader}
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />    
  </StrictMode>,
)
