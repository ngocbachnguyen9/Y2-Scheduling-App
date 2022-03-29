import React, {useState} from "react";
import TrainerLoginForm from "./TrainerLoginForm";
import fdmLogo from '../assets/fdm_Logo.png';

function TrainerDash({registry}) {

  const [trainer, setTrainer] = useState(null);

  const login = (details) => {
    const allTrainers = registry.getAllTrainers();
    for(let i = 0; i < allTrainers.length; i++){
      if (details.email == allTrainers[i].getEmail() && details.password == allTrainers[i].getPassword()){
        setTrainer(allTrainers[i]);
        break;
      }
    }
    document.getElementById("submit").value = "Incorrect Details. Try Again"
  }

  const logout = () => {
      setTrainer(null);
  }

  return (
    <div className="TrainerDash">
      {(trainer !== null) ? (
        <div>
          <h1>Welcome, {trainer.getFullName()}</h1>
          <button>View Timetable</button>  
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="App">
          <div className="logoSec">
            <img className="logo" src={fdmLogo} alt="Image Failed To Load" />
            <h1>Trainer Dashboard</h1>
          </div>
        <TrainerLoginForm Login={login}></TrainerLoginForm>
        </div>
      )}
    </div>
  );
}

export default TrainerDash;