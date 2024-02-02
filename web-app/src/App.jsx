
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Jobs from './components/pages/Jobs'
import Benefits from './components/pages/Benefits'
import Bar from './components/Navbar/Bar'
function App() {

  return (
    <>
      <Bar/>
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
