import { Link, useLocation } from "react-router-dom"
import "./dashboard-doctor.css";
import { useNavigate } from 'react-router-dom';

const Dashboard_admin = () => {
    const navigate = useNavigate();
    return ( 
    <>
    <div className="doctor-dashboard">
      <header className='ml-8'>
        <div className="brand">
          <h1><em><b>Admin Dashboard</b></em></h1>
        </div>
        <div className="links text-xl font-bold ">
                <Link to="/">Log Out</Link>
        </div>  
      </header>

    
    <main>
      <section className="stats">
        <div className="card">
          <h3>Total Patients</h3>
          <p>Number from database</p>
          <button className="logout-btn">Add Patient</button>
        </div>
        <div className="card">
          <h3>Total Doctors</h3>
          <p>Number from database</p>
          <button className="logout-btn">Add Doctor</button>
        </div>
        <div className="card">
          <h3>Total Caretakers</h3>
          <p>Number from database</p>
          <button className="logout-btn">Add Caretaker</button>
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
      <section className="students">
        <div className="section-header">
          <h2>Doctors</h2>
         
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Profession</th>
              
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </section>
      <section className="students">
        <div className="section-header">
          <h2>Caretakers</h2>
         
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Experience</th>
              
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
 
export default Dashboard_admin;