import { useState } from "react";

function TrainerDash({updateSkill,ud,Logout}) {

  const [profileData,setProfileData] = useState({
    skill: ud.skill,
    availability: ud.availability
  })

  const [showProfile, setShowProfile] = useState(false)

  const formUpdate = () =>{
    setShowProfile(!showProfile)
  }

  const submitSkill= e =>{
    e.preventDefault()

    updateSkill(profileData.skill,ud.userID)

    
    formUpdate()
  }
  
  return (
    <div className="TrainerDash">
      {(ud.userType === "trainer") ? (
        <div>
          <h1>Welcome, {ud.name}</h1>
          <button onClick={formUpdate}>Update Profile</button>
          <button>View Timetable</button>
          <button onClick={Logout}>Logout</button>
          
  
        <p><b>Profile:</b>{ud.skill}</p>
        {showProfile && <form onSubmit={submitSkill}>
          <input value={profileData.skill} type="text" name="newSkill" id="newSkill" onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
          <input type="submit" value="update Skill"/>
        </form>}

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