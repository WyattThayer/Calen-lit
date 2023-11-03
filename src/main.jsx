import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CalendarView from './components/CalendarView.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [{
      path:'calendar',
      element:<CalendarView/>
    },
    ],
  },{
    path:'login',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
