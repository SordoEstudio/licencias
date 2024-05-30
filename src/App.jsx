import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Licencias } from './pages/Licencias'

function App() {

  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:Id" element={<Licencias/>} />
      
  </Routes>
    </BrowserRouter>
  )
}

export default App
