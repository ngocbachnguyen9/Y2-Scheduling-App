import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import AddModuleForm from './AddModuleForm'
import Modules from './Modules'

const Course = ({course, onDelete, addModule}) => {

  const[viewModules,changeViewModule] =useState(false)

  const confirmDelete =()=>{
    if(window.confirm("Are you sure you wish to delete this course?")){
      onDelete(course.id)
    }
  }

  const changeView = () =>{
    changeViewModule(!viewModules)
  }

  const handleAddModule = () =>{
    addModule(course.id,
      {
        moduleName: "for testing",
        trainerID: 7,
        startTime: "15/03/2022, 12:00pm UTC",
        endTime: "15/03/2022, 2:00pm UTC",
    })
  }

  return (
    <div className="course">
        <h3>{course.courseName} <FaTimes onClick={confirmDelete} style={{cursor:'pointer'}}/></h3>
        <p>Status: {course.activeCourse ? <span style={{color:'green'}}>Active</span> : <span style={{color:'red'}}>Not Active</span>}</p>
        <p>Course Length: {course.courseLength} Weeks</p>
        {viewModules ? 
        <div className='moduleHeader'>
        <button onClick={changeView} className='btn'>Hide Modules</button> 
        <button onClick={handleAddModule} className='btn'>Add Modules</button> 
        <AddModuleForm />
        </div>
        :
        <button onClick={changeView} className='btn'>View Modules</button>}

        {(course.modules.length >0) && viewModules && <Modules modules = {course.modules} /> }
        {viewModules && (course.modules.length === 0) &&
        <p>There are currently no available Modules</p>}
        </div>

  )
}

export default Course