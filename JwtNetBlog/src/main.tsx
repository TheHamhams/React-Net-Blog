import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Login, NavBar } from './Components'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const handleLogin = (username: string, password: string) => {

}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={[<NavBar />, <Home />]} />
        <Route path='/login' element={[<NavBar />, <Login onLogin={handleLogin} />]} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
