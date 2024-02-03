import './App.css'; // Import CSS styles
import React, { useEffect } from 'react'; // Import React and useEffect
import { Navbar } from './components/Navbar/Navbar'; // Import Navbar component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components from react-router-dom
import Home from './components/pages/home'; // Import Home component
import Jobs from './components/pages/Jobs'; // Import Jobs component
import Benefits from './components/pages/Benefits'; // Import Benefits component
import Bar from './components/Navbar/Bar'; // Import Bar component
import Citation from './components/pages/Citation'; // Import Citation component

function App() {
  // Update document title on component mount using useEffect
  useEffect(() => {
    document.title = "Verdantia | Careers";
  }, []);

  return (
    <>
      <Bar /> {/* Render Bar component */}
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        {/* Define routes for different pages */}
        <Route path='/' element={<Home />} /> {/* Home page route */}
        <Route path='/Jobs' element={<Jobs />} /> {/* Jobs page route */}
        <Route path='/Benefits' element={<Benefits />} /> {/* Benefits page route */}
        <Route path='/Citations' element={<Citation />} /> {/* Citation page route */}
      </Routes>
    </>
  );
}

export default App; // Export App component as default
