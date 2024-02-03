
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Jobs from './components/pages/Jobs'
import Benefits from './components/pages/Benefits'
import Bar from './components/Navbar/Bar'
import Citation from './components/pages/Citation'
function App() {

  return (
    <>
      <Bar/>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Jobs' element = {<Jobs/>}/>
        <Route path='/Benefits' element = {<Benefits/>}/>
        <Route path='/Citations' element = {<Citation/>}/>
      </Routes>
      
      
    </>
    
  )
}

export default App
