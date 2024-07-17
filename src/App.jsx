
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  Personal } from './pages/Personal'
import { Licencias } from './pages/Licencias'
import Test from './pages/Test'

function App() {

  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Personal/>}/>
      <Route path="/:Id" element={<Licencias/>} />
      <Route path="/test" element={<Test/>} />
      
  </Routes>
    </BrowserRouter>
  )
}

export default App
