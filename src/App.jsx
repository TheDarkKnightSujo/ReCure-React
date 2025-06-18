import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/dashboard.jsx';
import Login from './components/login.jsx';
import PatientRegistration from './components/PatientRegistration.jsx';
import Checkup from './components/echeckup.jsx';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<PatientRegistration/>} />
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/checkup" element={<Checkup/>}/>
            </Routes>
        </>
    );
}

export default App;