import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import PatientRegistration from './components/PatientRegistration.jsx';

function App() {
    return (
        <>
          <Navbar/>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/patient" element={<PatientRegistration />} />
                
            </Routes>
        </>
    );
}

export default App;