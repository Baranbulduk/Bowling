import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Booking from './pages/Booking.tsx';
import Confirmation from './pages/Confirmation.tsx';

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
