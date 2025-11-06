import { Provider } from 'react-redux'
import './index.css'
import store from './store/store.js'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  }
])

ReactDOM.createRoot (document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Provider> */}
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)