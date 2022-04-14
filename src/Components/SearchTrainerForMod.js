import React, { useState } from 'react'

const SearchTrainerForMod = ({search , su}) => {


    const [skill,setSkill] = useState()
    const [trainerid,setTrainerid] = useState('')
		// setAllCourses(allCourses.map((course) => course.id === courseId
		// ? {...course,modules: data.modules} : course
		// ))

        let skillMap = [];

        su.map((staff)=>(staff.userType === "trainer" && !(skillMap.includes(staff.skill))) &&(
            skillMap.push(staff.skill)
        ))

        const handleSkillChange = (e)=>{
            setSkill(e.target.value)
            setTrainerid('')
        }

        const handleTrainerChange = e=>{
            setTrainerid(e.target.value)
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            search(skill,trainerid)


        }
        

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select defaultValue='selected' onChange={handleSkillChange}required>
            <option value='selected' disabled>Please Choose a Skill</option>
                {
                    skillMap.map((skills) =>(
                        <option key={skills}>{skills}</option>
                    ))
                }
            </select>
            <br></br>
            <select onChange={handleTrainerChange} defaultValue='selected' required>
                <option value='selected'>Please Choose a Trainer</option>
                {
                    su.map((trainer) => ((trainer.userType === "trainer") && trainer.skill === skill) && (
                        <option value={trainer.id} key={trainer.id}>{trainer.name}</option>
                    ))
                }
            </select>
            <input type="submit" />
        </form>

        {trainerid !== '' ? 
            su.map(staff => staff.id === parseInt(trainerid) && (
                <p key={staff.id}>
                Trainer: {staff.name}, Availability is: {staff.availability}
                </p>
            ) 
                )
        :
        <p>
            Please select a trainer to proceed
        </p>
        }
    </div>
  )
}

export default SearchTrainerForMod