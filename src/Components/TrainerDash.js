import { useState } from "react";
import Schdule from "./Schdule";

function TrainerDash({updateProfile,ud,Logout,cd}) {

  const [profileData,setProfileData] = useState({
    skill: ud.skill,
    availability: ud.availability
  })

  const [showProfile, setShowProfile] = useState(false)

  const [showTimeTableView, setTimeTableView] = useState(false)

  const formUpdate = () =>{
    setShowProfile(!showProfile)
  }
  const changeTimeTableView = () => {
    setTimeTableView(!showTimeTableView)
  }

  const submitProfile= e =>{
    e.preventDefault()

    updateProfile(profileData.skill,ud.userID, profileData.availability)
    
    formUpdate()
  }
  
  return (
    <div className="TrainerDash">
      {(ud.userType === "trainer") ? (
        <div>
          <h1>Welcome, {ud.name}</h1>
          <button onClick={formUpdate}>Update Profile</button>
          <button onClick={changeTimeTableView}>View Timetable</button>
          <button onClick={Logout}>Logout</button>
          
  
        <p><b>Profile:</b> Skill(s): {ud.skill},<br/> General Availability: {ud.availability}</p>
        {showProfile && <form onSubmit={submitProfile}>
          <label>Skill:</label>
          <input type="text" name="newSkill" id="newSkill" value={profileData.skill} onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
          <label>Availability: </label>
          <input type="text" name="availability" id="availability" value={profileData.availability} onChange={e => setProfileData({...profileData, availability: e.target.value})}/>
          <input type="submit" value="Update Profile"/>
        </form>}

        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}
      {console.log(ud.userID)}
      
      {showTimeTableView &&
      <Schdule />
}
    </div>
  );
}


export default TrainerDash;