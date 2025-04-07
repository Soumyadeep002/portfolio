import React from 'react'
import './assets/css/dark/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar/>
          <HomePage/>
          <Footer/>
        </>
      ),
    },
    // student dashboard routes 
  ],

    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    });

  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
export default App
