import React from 'react'
import Course from "./Course";


const Courses = ({courses, onDelete, addModule}) => {
  return (
      <>
        {courses.map((course)=>(
      <Course  key={course.id} course={course}
      onDelete={onDelete} addModule={addModule} />
  ))}
  </>
  )
}

export default Courses