import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './routes/index'
import ErrorPage from './error-page'
import Store from './routes/store'
import Cart from './routes/cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "store",
            element: <Store />,
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
