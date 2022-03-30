import './index.css';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import Registry from "./Classes/Registry.js";

function App() {

  const[registry] = useState(new Registry());

  const [userType,setUserType] = useState("T");

  const changeUserType = (type) =>{
    setUserType(type)
  }
 
  return (
    
    <div className="app">
      <LoginPage userType={userType} changeUserType = {changeUserType}/>
    </div>
  );
}

export default App;
