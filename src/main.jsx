import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import CalendarView from './components/CalendarView.jsx'
import CreateAccount from './components/CreateAccount.jsx'
import DailyView from './components/DailyView.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [{
      path:'Calendar',
      element:<CalendarView/>,
    },{
      path:'DailyView/:date',
      element:<DailyView/>,
      loader: async ({params})=>{
       const res = await axios.get(`/event/${params.date}`)
       return {dailyView:res.data}
      }
    },{
      path:'/createAccount',
      element:<CreateAccount/>
  }],
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
