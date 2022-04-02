import React from "react";


function StaffDash({ud, Logout, cd} ) {
  
  console.log(ud.userType)

  const tableRows = [];

  for(let i=0; i<cd.length; i++){
    tableRows.push(
            <tr>
              <td>{cd[i].id}</td>
              <td>{cd[i].courseName}</td>
              <td>{cd[i].courseLength}</td>
              <td><button>Add Modules</button></td>
              <td>{cd[i].activeCourse ? "True" : "False"}</td>
              <td><button>Delete Course</button></td>
            </tr>
    )
  }

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
              <th>Add Modules</th>
              <th>Course Active?</th>
              <th>Delete Course</th>
            </tr>
            {tableRows}
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