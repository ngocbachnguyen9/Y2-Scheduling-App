import { useState } from "react";
import Par from "./Par";
import Schdule from "./Schdule";

function TrainerDash({updateProfile,ud,Logout,cd}) {

  const [profileData,setProfileData] = useState({
    skill: ud.skill,
    availability: ud.availability
  })

  const [showProfileUpdate, setShowProfileUpdate] = useState(false)

  const [showTimeTableView, setTimeTableView] = useState(false)

  const [showProfile , setShowProfile] = useState(true)

  const formUpdate = () =>{
    setShowProfileUpdate(!showProfileUpdate)
  }
  const changeViewProfile = () => { 
    setShowProfile(true)
    setTimeTableView(false)

  }
  const changeTimeTableView = () => {
    setTimeTableView(true)
    setShowProfile(false)
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
          <Par />
          <h3 className="title">Welcome {ud.name}</h3>
        <button className="btn btn-pos2" onClick={changeViewProfile} style={{backgroundColor:"#4427fa"}} >View Profile</button>
        <button className="btn btn-pos2" onClick={changeTimeTableView} style={{backgroundColor:"#4427fa"}} >View Timetable</button>
        <button className="btn btn-pos2" onClick={Logout} style={{backgroundColor:"#4427fa"}} >Logout</button>
        </div>
        {showProfile &&
        <div className="trainer-dash-box">
          <br></br>
          <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="W3Schools.com" style={{border: "solid black 1px",borderRadius:"1em"}}></img>
          <br></br>
          <br></br> 
          <br></br>
          <br></br>
          <button className="btn btn-pos1" onClick={formUpdate}>Update Profile</button>
          <br></br>          
  
        <p><b>Profile:</b> 
          <br></br>
        Skill(s): {ud.skill},<br/> General Availability: {ud.availability}</p>
        {showProfileUpdate && <form onSubmit={submitProfile}>
          <br></br>
          <label>Skill:</label>
          <input type="text" name="newSkill" id="newSkill" value={profileData.skill} onChange={e => setProfileData({...profileData, skill: e.target.value})}/>
         <br></br>
          <label>Availability: </label>
          <input type="text" name="availability" id="availability" value={profileData.availability} onChange={e => setProfileData({...profileData, availability: e.target.value})}/>
          <br></br>
          <input className="btn btn-pos1" type="submit" value="Update Profile Details"/>
        </form>}
   
         
        </div>
}
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
