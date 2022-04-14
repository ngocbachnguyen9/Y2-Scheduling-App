import React, { useState } from "react";
import Courses from "./Courses";


function StaffDash({su, ud, Logout, cd, courseDelete, addCourse, addModule} ) {

  const [showAddCourse, setShowAddCourse] = useState(false)

  const courseAddHandler = e =>{
    e.preventDefault()
    addCourse({
      courseName: e.target.courseName.value,
      courseLength: 0,
      activeCourse: false,
      modules: []
    })
    addCourseView()
  }

  const addCourseView = () =>{
    setShowAddCourse(!showAddCourse)
  }

  return (
    
    <div className="StaffDash">
      {(ud.userType === "staff") ? (
        <div>
        <div className="trainer-dash-box-smaller">
        <button className="btn btn-pos2" >View Course</button>
        </div>
        <div className="trainer-dash-box">
          <div className="mainHeader">
          <h1 className="title title-align">Welcome {ud.name}</h1>
          <button className="btn" style={{backgroundColor:"#4427fa"}} onClick={Logout}>Logout</button>
          </div>
          <div className="sdHeader">
            <h2 className="title-align">Courses</h2>          
            <button className="btn" onClick={addCourseView}>Create Course</button>
          </div>
          {showAddCourse && <form onSubmit={courseAddHandler}>
            <div className="course-form-container">
              <label className="form-label1">Course Name: </label>
              <br></br>
              <input className='input-style' placeholder='Add Course Name' type="text" name="courseName" id="course-name" required/>
            </div>
            <div className="submit-container">
              <input className="btn btn-pos1 btn-course" type="submit" value="Add Course" />
            </div>
            <br></br>
          </form>}
          <Courses su ={su} courses={cd} onDelete={courseDelete} addModule={addModule}/>
          </div>
        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}

        </div>)
      
}


export default StaffDash;