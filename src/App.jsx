import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/dashboard.jsx';
import Login from './components/login.jsx';
import PatientRegistration from './components/PatientRegistration.jsx';
import Checkup from './components/echeckup.jsx';
import Dashboard_doctor from './components/dashboard-doctor.jsx';
import Dashboard_admin from './components/dashboard-admin.jsx';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [coins, setCoins] = useState(0);
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<PatientRegistration/>} />
                <Route exact path="/dashboard" element={<Dashboard coins={coins} setCoins={setCoins}/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/checkup" element={<Checkup/>}/>
                <Route exact path="/doctordashboard" element={<Dashboard_doctor/>}/>
                <Route exact path="/admindashboard" element={<Dashboard_admin/>}/>
                
            </Routes>
            <ToastContainer autoClose={2000} pauseOnHover={false}/>
        </>
    );
}

export default App;