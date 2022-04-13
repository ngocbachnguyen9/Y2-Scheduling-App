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
        <div className="big-box">
        
        <div className="trainer-dash-box-smaller">
        <button className="btn btn-pos2" >Create Course</button>
        <button className="btn btn-pos2" >Create Course</button>
        </div>

        <div className="trainer-dash-box">
          <h1 className="title">Welcome {ud.name}</h1>
          <br></br>
          <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="W3Schools.com"></img>
          <br></br>
          <br></br> 
          <br></br>
          <h3>Name: </h3>
          <br></br>
          <h3>Course:</h3>
          <br></br>
          <button className="btn btn-pos1" onClick={formUpdate}>Update Profile</button>
          <br></br>
          <button className="btn btn-pos" onClick={Logout}>Logout</button>
          
  
        <p><b>Profile:</b> 
          <br></br>
        Skill(s): {ud.skill},<br/> General Availability: {ud.availability}</p>
        {showProfile && <form onSubmit={submitProfile}>
          <br></br>
          <label>Skill:</label>
          <input type="text" name="newSkill" id="newSkill" value={profileData.skill} onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
         <br></br>
          <label>Availability: </label>
          <input type="text" name="availability" id="availability" value={profileData.availability} onChange={e => setProfileData({...profileData, availability: e.target.value})}/>
          <br></br>
          <input className="btn btn-pos1" type="submit" value="Update Profile Details"/>
        </form>}
        <hr></hr>
        <button className="btn btn-pos1" onClick={changeTimeTableView}>View Timetable</button>
         
        </div>
        </div>
      
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}
      {console.log(ud.userID)}
      
      {showTimeTableView &&
      <Schdule />

      }</div>
  );
}


export default TrainerDash;
