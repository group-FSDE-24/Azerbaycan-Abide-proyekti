import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MonumentsPage from './components/pages/MonumentsPage.jsx'
import AdminPage from './components/pages/AdminPage.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import MonumentItemPage from './components/pages/MonumentItemPage.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <MonumentsPage />,
        path: '/'
      },
      {
        element: <AdminPage />,
        path: '/admin'
      },
      {
        element: <MonumentItemPage />,
        path: '/monument'
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
