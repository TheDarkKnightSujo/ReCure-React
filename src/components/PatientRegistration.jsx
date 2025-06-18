import { Link } from 'react-router-dom';
import "./PatientRegistration.css"

// <p>Already have an account? <Link to="/login">Login</Link></p>

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientRegistration = () => {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnf] = useState('')
    const [user, setUser] = useState('Patient');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {firstname, password, author};

        setIsPending(true)

        fetch()

        navigate(-1)
    }

    return (
        <>

        <div className="create">
            <h2 className="text-2xl font-bold pt-[120px]">Sign In to ReCure</h2>
            <form onSubmit={()=>{navigate("/dashboard")}}>
                <div className="flex flex-row gap-4">
                    <div>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        value={firstname} 
                        onChange={(e)=> setFirstname(e.target.value)} 
                        placeholder="Enter Firstname"
                        required
                    />
                    </div>

                    <div>
                    <label>Surname</label>
                    <input 
                        type="text" 
                        value={secondname} 
                        onChange={(e)=> setSecondname(e.target.value)} 
                        placeholder="Enter Surname"
                        required
                    />
                    </div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)} 
                        placeholder="Enter your Email"
                        required
                    />
                    </div>

                    <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} 
                        placeholder="Enter a password"
                        required
                    />
                    </div>

                    <div>
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        value={cnfpassword} 
                        onChange={(e)=> setCnf(e.target.value)} 
                        placeholder="Confirm Password"
                        required
                    />
                    </div>
                </div>

                <label>User Type</label>
                <select value={user} onChange={(e)=>setUser(e.target.value)}>
                    <option value="Patient">Patient</option>
                    <option value="Caregiver">Caregiver</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <p className='pb-2'>Already have an account? <Link to="/login">Login</Link></p>
                {!isPending && <button>Sign In</button>}
            </form>
        </div>
        </>
    );
}

export default PatientRegistration;