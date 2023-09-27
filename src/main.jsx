import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    
    errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)