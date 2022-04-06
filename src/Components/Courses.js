import React from 'react'
import Course from "./Course";


const Courses = ({su, courses, onDelete, addModule}) => {
  return (
      <>
        {courses.map((course)=>(
          <Course key={course.id} course={course}
          onDelete={onDelete} addModule={addModule} su = {su} />
  ))}
  </>
  )
}

export default Courses