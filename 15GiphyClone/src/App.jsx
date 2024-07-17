
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Category from './Pages/Category'
import Search from './Pages/Search'
import GifPage from './Pages/GifPage'
import Favourites from './Pages/Favourites'
import Home from './Pages/Home'
import AppLayout from './layout/AppLayout'
import GifProvider from './Context/Gif-context'


  //homepage
  //categories
  //search
  //single gif
  //favourites

    const router=createBrowserRouter([
      {
        element:<AppLayout/>,

        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/:category',
            element:<Category/>
          },
          {
            path:'/search/:query',
            element:<Search/>
          },
          {
            path:'/:type/:slug',
            element:<GifPage/>
          },
          {
            path:'/favourites',
            element:<Favourites/>
          },
        ]
      }
    ])

function App() {
  <GifProvider>
  return <RouterProvider router={router}/>
  </GifProvider>
}

export default App
