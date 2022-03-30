import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registry from "./Classes/Registry";
import Menu from "./Components/Menu";
import StaffDash from "./Components/StaffDash";
import TrainerDash from "./Components/TrainerDash";
import Welcome from "./Components/Welcome";
import React,{useState} from "react";

const App = () => {
	const[registry] = useState(new Registry());
	return (
		<BrowserRouter>
		  <Routes>
				<Route path="/" element={<Menu />}>
			  	<Route index element={<Welcome/>} />
			  	<Route path="staffdash" element={<StaffDash registry={registry}/>} />
				<Route path="trainerdash" element={<TrainerDash registry={registry}/>} />
				</Route>
		  </Routes>
		</BrowserRouter>
	  );
};
export default App;
