import { Link } from 'react-router-dom';
import "./PatientRegistration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PatientRegistration = () => {
    const [firstName, setFirstname] = useState('');
    const [secondName, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnf] = useState('')
    const [userType, setUser] = useState('Patient');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Done");
        axios.post('http://localhost:4000/register', {firstName, secondName, email, userType, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

        if(userType === "Doctor"){
            navigate("/doctordashboard")
        }else{
            navigate("/dasboard")
        }
    }

    return (
        <>

        <div className="create">
            <h2 className="text-2xl font-bold pt-[120px]">Sign Up to ReCure</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-4">
                    <div>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e)=> setFirstname(e.target.value)} 
                        placeholder="Enter Firstname"
                        required
                    />
                    </div>

                    <div>
                    <label>Surname</label>
                    <input 
                        type="text" 
                        value={secondName} 
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

                {(password !== cnfpassword && cnfpassword !== "") && (
                    <>
                        <p className='font-bold text-red-500'>Password does not match</p>
                    </>
                )}

                <label>User Type</label>
                <select value={userType} onChange={(e)=>setUser(e.target.value)}>
                    <option value="Patient">Patient</option>
                    <option value="Caregiver">Caregiver</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <p className='pb-2'>Already have an account? <Link to="/login">Login</Link></p>

                {(password !== cnfpassword && cnfpassword !== "")? (<button disabled>Sign Up</button>):(<button>Sign Up</button>)}
            </form>
        </div>
        </>
    );
}

export default PatientRegistration;