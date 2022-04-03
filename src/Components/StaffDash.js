import React, { useState } from "react";
import Courses from "./Courses";


function StaffDash({ud, Logout, cd, courseDelete, addCourse} ) {

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

  // const testingP = () =>{
  //   {cd.map((course)=>(
  //     <Course  key={course.id} course={course} />
  //   ))}
  // }

  return (
    
    <div className="StaffDash">
      {(ud.userType === "staff") ? (
        <div>
          <div className="mainHeader">
          <h1>Welcome, {ud.name}</h1>
          <button className="btn" style={{backgroundColor:"#4427fa"}} onClick={Logout}>Logout</button>
          </div>
          <div className="sdHeader">
            <h2>Courses</h2>          
            <button className="btn" onClick={addCourseView}>Create Course</button>
          </div>

          {showAddCourse && <form onSubmit={courseAddHandler}>
            <div className="course-form-container">
              <label>Course Name </label>
              <input type="text" name="courseName" id="course-name" required/>
            </div>
            <div className="submit-container">
              <input type="submit" value="Add Course" />
            </div>
          </form>}
          <Courses courses={cd} onDelete={courseDelete}/>

        </div>
      ) : (
        <div>
          <p>You are not authorised here</p>
        </div>
      )}

        </div>)
      
}


export default StaffDash;