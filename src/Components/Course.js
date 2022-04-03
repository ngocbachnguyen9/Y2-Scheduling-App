import {FaTimes} from 'react-icons/fa'

const Course = ({course, onDelete}) => {
  return (
    <div className="course">
        <h3>{course.courseName} <FaTimes onClick={()=>onDelete(course.id)} style={{cursor:'pointer'}}/></h3>
        <p>Status: {course.activeCourse ? <span style={{color:'green'}}>Active</span> : <span style={{color:'red'}}>Not Active</span>}</p>
        <p>Course Length: {course.courseLength} Weeks</p>
        <button className='btn'>View Modules</button>
        </div>
  )
}

export default Course