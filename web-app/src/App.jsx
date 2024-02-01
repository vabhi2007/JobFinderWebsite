
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Jobs from './components/pages/Jobs'
import Benefits from './components/pages/Benefits'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Jobs' element = {<Jobs/>}/>
        <Route path='/Benefits' element = {<Benefits/>}/>
      </Routes>

    </>
    
  )
}

export default App
