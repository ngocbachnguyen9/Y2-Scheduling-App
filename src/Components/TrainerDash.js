import React, {useState} from "react";
import TrainerLoginForm from "./TrainerLoginForm";

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
    document.getElementById("IDNumber").style.backgroundColor="red";
    document.getElementById("pword").style.backgroundColor="red";
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
        <TrainerLoginForm Login={login}></TrainerLoginForm>
      )}
    </div>
  );
}

export default TrainerDash;