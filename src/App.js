import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import StaffDash from "./Components/StaffDash";
import TrainerDash from "./Components/TrainerDash";
import Welcome from "./Components/Welcome";
import React,{useState,useEffect} from "react";

const App = () => {

	const [userEmail, setUserEmail] = useState("");

	const[systemUsers, setSystemUsers] = useState();

	const[allCourses, setAllCourses] = useState();

	const [userDetails,setUserDetails] = useState({})

	console.log(allCourses)


	const userIsNoOne= () =>{
		if (userDetails.userType !== "staff" && userDetails.userType !== "trainer" ) {
			return true
		}
		else{
			return false
		}
	}

	const Login = (details) =>{
		setUserEmail(details.email)
	}

	const Logout = () =>{
		setUserEmail((""))
		const navigate = useNavigate();
		navigate("/")
		
	}

	useEffect(()=>{
		const changeType = () =>{
			if (userEmail !== ""){
			systemUsers.forEach(ut => {
				if(userEmail === ut.email){
					setUserDetails(
						{
							userID : ut.id,
							name : ut.name,
							email : ut.email,
							userType : ut.userType,
							skill : ut.skill,
							availability : ut.availability
						}
					)
				}
			});
			}
			else{
				setUserDetails({
					userID : -1,
					userType : ""
				})
			}
		}
		changeType();
	},[userEmail,systemUsers])

	useEffect(() =>{
		const getUsers = async () =>{
			const usersFromServer = await fetchUsers()
			setSystemUsers(usersFromServer)
		}
		const getCourses = async () =>{
			const coursesFromServer = await fetchCourses()
			setAllCourses(coursesFromServer)
		}
		getUsers()
		getCourses()
	},[])

	const fetchUsers = async () => {
		const res = await fetch("http://localhost:5500/users")
		const data = await res.json()

		return data
	}
	const fetchCourses = async () => {
		const res = await fetch("http://localhost:5500/courses")
		const data = await res.json()

		return data
	}

	return (
		<Router>
			<Routes>
				<Route path ="/" element={userIsNoOne() ? <Welcome users={systemUsers} Login = {Login}/>
				:((userDetails.userType === "staff") ?  <Navigate to="/staffdash"/>
				:(<Navigate to="/trainerdash"/>))}/>
				<Route path="staffdash" element={ userDetails.userType === "staff" ?
					 <StaffDash ud = {userDetails} Logout={Logout}/> : <Navigate to="/" />} />
				<Route path="trainerdash" element={userDetails.userType === "trainer" ?
				<TrainerDash ud = {userDetails} Logout={Logout}/> : <Navigate to="/" />} />
			</Routes>
		</Router>
	  );
};
export default App;
