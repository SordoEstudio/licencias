import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Licencias } from './pages/Licencias'

function App() {

  return (
  <BrowserRouter>
  <Routes>
      <Route path="/licencia" element={<Home/>}/>
      <Route path="/licencia/:Id" element={<Licencias/>} />
      
  </Routes>
    </BrowserRouter>
  )
}

export default App
