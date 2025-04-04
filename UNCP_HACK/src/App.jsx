import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing'
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import CameraTracker from './components/CameraTracker';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/chat' element={<ChatBot />} />
        <Route path='/camera' element={<CameraTracker />} />
      </Routes>
    </Router>
  )
}

export default App
