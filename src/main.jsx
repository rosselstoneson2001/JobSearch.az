import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import "./tailwind/index.css"
import 'boxicons'



ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={routes} />

)

