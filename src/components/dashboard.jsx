import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faLaptopMedical, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import "./dashboard.css";

const Dashboard = () => {
    return ( 
        <div className="home">
            <div className="tank">
                <div className="tile flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faUserDoctor} className="w-[120px] h-[120px] p-6"/>
                    <h2 className="text-xl font-bold">Contact Doctors</h2>
                </div>
                <div className="tile flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faHospitalUser} className="w-[120px] h-[120px] p-6"/>
                    <h2 className="text-xl font-bold">Upload Prescription</h2>
                </div>
                <div className="tile flex flex-col justify-center items-center">
                    <a href="/checkup">
                    <FontAwesomeIcon icon={faLaptopMedical} className="w-[120px] h-[120px] p-6"/>
                    <h2 className="text-xl font-bold">Daily E-Checkup</h2>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;