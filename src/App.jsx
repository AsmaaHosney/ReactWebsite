import React from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
path:"/",element:<Layout/>,children:
[
  {
    path:"",element:<Home/>
  },
{
  path:"/Home",element:<Home/>
},
{
  path:"/About",element:<About/>
},
{
  path:"/Portfolio",element:<Portfolio/>
},

{
  path:"/Contact",element:<Contact/>
},
{
path:"/Navbar" ,element:<Navbar/>
},
],
  },
])


export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
