import React, {useState} from "react";
import StaffLoginForm from "./StaffLoginForm";
import fdmLogo from '../assets/fdm_Logo.png';

function StaffDash({registry}) {

  const [staff, setStaff] = useState(null);

  const login = (details) => {
    const allStaff = registry.getAllStaff();
    for(let i = 0; i < allStaff.length; i++){
      if (details.ID == allStaff[i].getID() && details.password == allStaff[i].getPassword()){
        setStaff(allStaff[i])
        break;
      }
    }
    document.getElementById("submit").value = "Incorrect Details. Try Again"
  }

  const logout = () => {
      setStaff(null);
  }

  return (
    <div className="StaffDash">
      {(staff !== null) ? (
        <div>
          <h1>Welcome, {staff.getFullName()}</h1>
          <button>Create Course</button>
          <h2>List of Courses</h2>
          <table id="Course Table">
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Course Length</th>
              <th>View Modules</th>
              <th>Delete Course</th>
            </tr>
          </table>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="App">
          <div className="logoSec">
            <img className="logo" src={fdmLogo} alt="Image Failed To Load" />
            <h1>Training and Scheduling</h1>
          </div>
        <StaffLoginForm Login={login}></StaffLoginForm>
        </div>
      )}
    </div>
  );
}

export default StaffDash;