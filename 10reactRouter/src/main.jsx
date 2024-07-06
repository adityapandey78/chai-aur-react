import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
//method 1 for router
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact-us",
//         element:<Contact/>
//       },

//     ]
//   }
// ])
 
//method 2 
//createRoutefromElemets wale method se bhi kr skte hain

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      path='github' 
      element={<Github/>}
       />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
