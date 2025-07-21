import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="app"element={<App/>}></Route>
        <Route path='my app'element={<MyApp/>}></Route>
      <Route path='/' element={<Welcome/>}></Route>  </Routes>
  </BrowserRouter>
)
