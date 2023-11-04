import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Rotas, Routes, Route} from 'react-router-dom'
import './index.css'
import Main from './components/Main'
import Casal from './components/Casal'
import Solteiros from './components/Solteiros/index';
import Familia from './components/Familia/index';
import Nav from './components/Nav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/solteiros' element={<Solteiros />}></Route>
        <Route path='/casal' element={<Casal />}></Route>
        <Route path='/familia' element={<Familia />}></Route>
      </Routes>
    </Rotas>
  </React.StrictMode>,
)
