import moment from 'moment'
import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import AddModuleForm from './AddModuleForm'
import Modules from './Modules'
import Popup from './Popup'

const Course = ({ su , course, onDelete, addModule}) => {

  const [popIsOpen,setPopIsOpen] = useState(false);

  const togglePopup = () =>{
      setPopIsOpen(!popIsOpen)
  }

  const[viewModules,changeViewModule] =useState(false)

  const confirmDelete =()=>{
    if(window.confirm("Are you sure you wish to delete this course?")){
      onDelete(course.id)
    }
  }

  const changeView = () =>{
    changeViewModule(!viewModules)
  }

  const handleAddModule = (mName,MStart,MEnd,MTrainer,MtrainerId) =>{
    const newId = course.modules.length + 1
    


    console.log(mName,MStart,MEnd,MTrainer,MtrainerId)




    addModule(course.id,
      {
        id: newId,
        moduleName: mName,
        trainerName: MTrainer,
        trainerId: parseInt(MtrainerId),
        startTime: moment(MStart).format('MMMM Do YYYY, h:mm a'),
        endTime: moment(MEnd).format('MMMM Do YYYY, h:mm a')
    })
  
    togglePopup()
  }

  return (
    <div className="course">
        <h3>{course.courseName} <FaTimes onClick={confirmDelete} style={{cursor:'pointer'}}/></h3>
        <p>Status: {course.activeCourse ? <span style={{color:'green'}}>Active</span> : <span style={{color:'red'}}>Not Active</span>}</p>
        <p>Course Length: {course.courseLength} Weeks</p>
        {viewModules ? 
        <div className='moduleHeader'>
        <button onClick={changeView} className='btn'>Hide Modules</button> 
        <button onClick={togglePopup} className='btn'>Add Modules</button> 
        {popIsOpen && <Popup 
        content = {
          <AddModuleForm su = {su} addModuleHandler={handleAddModule}/>
        }
          handleClose = {togglePopup}
        
        />}

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