import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faLaptopMedical, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import "./dashboard-doctor.css";

const Dashboard_doctor = () => {
    return ( <>
    <div className="doctor-dashboard">
       <header>
      <div class="brand">
        <h1><em><b>Doctor Dashboard</b></em></h1>
      </div>
      <button class="logout-btn">Logout</button>
    </header>

    
    <main>
      <section className="stats">
        <div className="card">
          <h3>Total Patients</h3>
          <p>Number from database</p>
        </div>
        
        <div className="card">
          <h3>Messages/Alerts</h3>
          <p>12</p>
        </div>
      </section>

      <section className="students">
        <div className="section-header">
          <h2>Patients</h2>
         
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Illness</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        

        
      </section>
    </main>
  </div>
  </>
     );
}
 
export default Dashboard_doctor;