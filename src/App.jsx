import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Licencias } from './pages/Licencias'
import NewLicence from './components/NewLicence'

function App() {

  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:Id" element={<Licencias/>} />
      <Route path="/newLicence" element={<NewLicence/>} />
      
  </Routes>
    </BrowserRouter>
  )
}

export default App
