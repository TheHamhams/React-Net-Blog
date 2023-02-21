import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Login, NavBar, Register } from './Components'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Home */}
        <Route path='/' element={[<NavBar key="navbar" />, <Home key="home" />]} />
        {/* Login */}
        <Route path='/login' element={[<NavBar key="navbar" />, <Login key="login" />]} />
        {/* Register */}
        <Route path='/register' element={[<NavBar key="navbar" />, <Register key="register" />]} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
