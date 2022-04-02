import { useState } from "react";
import Popup from "./Popup";

function TrainerDash({ud,Logout}) {

  const [skill,setSkill] = useState(ud.skill)

  const getUserByID = async (id) => {
		const res = await fetch(`http://localhost:5500/users/${id}`)
		const data = await res.json()

		return data
	}

  console.log((ud))
  

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="TrainerDash">
      {(ud.userType === "trainer") ? (
        <div>
          <h1>Welcome, {ud.name}</h1>
          <button onClick={togglePopup}>View Profile</button>
          <button>View Timetable</button>
          <button onClick={Logout}>Logout</button>
          {isOpen && <Popup
      content={<>
        <b>Profile</b>   
        <p>{skill}</p>     
        <button>Update Skill</button>
      </>}
      handleClose={togglePopup}
    />}
        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}
    </div>
  );
}

export default TrainerDash;