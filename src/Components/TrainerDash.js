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
        <div className="trainer-dash-box-smaller">
        <button className="btn btn-pos1" >Create Course</button>
        <button className="btn btn-pos1" >Create Course</button>
        </div>
        <div className="trainer-dash-box">
          <h1>Welcome, {ud.name}</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn btn-pos1" onClick={formUpdate}>Update Profile</button>
          <button className="btn btn-pos1">View Timetable</button>
          <button className="btn btn-pos" style={{backgroundColor:"#4427fa"}} onClick={Logout}>Logout</button>
          
  
        <p><b>Profile:</b>{ud.skill}</p>
        {showProfile && <form onSubmit={submitSkill}>
          <input type="text" name="newSkill" id="newSkill" onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
          <input type="submit" value="update Skill"/>
        </form>}
        </div>
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