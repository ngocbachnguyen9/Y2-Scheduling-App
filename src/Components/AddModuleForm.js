import {useEffect, useState} from 'react'
import SearchTrainerForMod from './SearchTrainerForMod'

const AddModuleForm = ({su,addModuleHandler}) => {

    const[text, setText] = useState('')
    const[moduleName ,setModuleName] = useState('')
    const[startTime, setStartTime] = useState('')
    const[endTime, setEndTime] = useState('')
    const[trainer, setTrainer] = useState('')
    const[trainerId, setTrainerId] = useState('')
    
    const onSubmit = e =>{

        e.preventDefault()
        if (startTime === "invalid date" || endTime === "invalid date" || moduleName === "") {
            window.alert("Please Enter Valid Data")
        }
        else{
            addModuleHandler(moduleName,startTime,endTime,trainer,trainerId)

        }

    }

    useEffect(()=>{

        su.forEach(ut => {
            if(parseInt(trainerId) === ut.id){
                setTrainer(
                    ut.name
                )
            }
        });

    },[su,trainerId])

    const handleSearch = (skill,newTrainerId) => {
        setTrainerId(newTrainerId)
        setText(skill)
    }

  return (
      <div>
          <SearchTrainerForMod search = {handleSearch} su={su} />
          {(trainerId !== '' && text !== '') && <form className='addModuleForm' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Module Name</label>
            <input type="text" value={moduleName} onChange={(e)=> setModuleName(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>Start day and time</label>
            <input type="datetime-local" value={startTime} onChange={(e)=> setStartTime(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>End day and time</label>
            <input type="datetime-local" value={endTime} onChange={(e)=> setEndTime(e.target.value)} required/>
        </div>
        <div>
        <input type="submit" value="add Module" />
        </div>
    </form>}
      </div>
    
  )
}

export default AddModuleForm