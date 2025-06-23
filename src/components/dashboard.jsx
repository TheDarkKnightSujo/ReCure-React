import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faLaptopMedical, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import "./dashboard.css";

const QUESTS = [
    { id: 1, text: "Contact a Doctor" },
    { id: 2, text: "Upload a Prescription" },
    { id: 3, text: "Complete Daily E-Checkup" },
];

const Dashboard = ({ coins, setCoins }) => {
    const [completed, setCompleted] = useState([]);

    const handleQuest = (id) => {
        if (!completed.includes(id)) {
            setCompleted([...completed, id]);
            setCoins(coins + 50);
        }
    };

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
            {/* Quest System */}
            <div className="quest-section w-5vw">
                <div className='flex flex-row justify-between align-center'>
                <h2 className="quest-title">Quests</h2>
                {coins > 0 && (
                <div className="coin-display">
                    <span role="img" aria-label="coin" className="coin-icon">🪙</span>
                    <span className="coin-count">{coins}</span>
                </div>
                )}
                </div>
                <ul className="quest-list">
                    {QUESTS.map(q => (
                        <li key={q.id} className={completed.includes(q.id) ? "quest-completed" : ""}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={completed.includes(q.id)}
                                    disabled={completed.includes(q.id)}
                                    onChange={() => handleQuest(q.id)}
                                />
                                {q.text}
                                {completed.includes(q.id) && <span className="tick"> ✔</span>}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="quest-reward">Complete a quest to earn <span className="coin-icon">🪙</span> 50 coins!</div>
            </div>
        </div>
     );
}
 
export default Dashboard;