import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('Patient');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

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
                <h2 className="text-2xl font-bold pt-[120px]">Log In</h2>
                <form onSubmit={()=>{navigate("/dashboard")}}>
                    <label>User Type</label>
                    <select value={user} onChange={(e)=>setUser(e.target.value)}>
                        <option value="Patient">Patient</option>
                        <option value="Caregiver">Caregiver</option>
                        <option value="Doctor">Doctor</option>
                    </select>

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
                    </div>
                    {!isPending && <button>Log In</button>}
                </form>
            </div>
        </>
    );
}
 
export default Login;