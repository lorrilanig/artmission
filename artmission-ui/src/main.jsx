import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SignUpPage from './components/LandingPage/SignUpPage.jsx';

//browser routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path:'/signup',
    element: <SignUpPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
