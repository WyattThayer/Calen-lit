import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import CalendarView from './components/CalendarView.jsx'
import Login from './components/Login.jsx'
import store from './store.js'
import { Provider } from 'react-redux'

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
    path:'/login',
    element: <Login/>
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="calendar" element={<CalendarView />} />
//       <Route path="login" element={<Login />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
