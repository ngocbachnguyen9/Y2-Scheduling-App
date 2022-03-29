import React, {useState} from "react";
import StaffLoginForm from "./StaffLoginForm";

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
    document.getElementById("IDNumber").style.backgroundColor="red";
    document.getElementById("pword").style.backgroundColor="red";
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
        <StaffLoginForm Login={login}></StaffLoginForm>
      )}
    </div>
  );
}

export default StaffDash;