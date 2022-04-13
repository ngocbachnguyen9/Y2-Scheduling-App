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
          <br></br>  <br></br>
          <h3>Name: </h3>
          <br></br>
          <h3>Course:</h3>
          <br></br>
          <button className="btn btn-pos1" onClick={formUpdate}>Update Profile</button>
          <button className="btn btn-pos1">View Timetable</button>
          <button className="btn btn-pos" style={{backgroundColor:"#4427fa"}} onClick={Logout}>Logout</button>
          
          <br></br>
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