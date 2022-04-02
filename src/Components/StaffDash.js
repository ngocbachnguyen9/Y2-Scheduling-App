import React from "react";


function StaffDash({ud, Logout} ) {
  
  console.log(ud.userType)

  return (
    
    <div className="StaffDash">
      {(ud.userType === "staff") ? (
        <div>
          <h1>Welcome, {ud.name}</h1>
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
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}

        </div>)
      
}


export default StaffDash;