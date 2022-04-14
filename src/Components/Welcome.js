import LoginForm from "./LoginForm";
import fdmLogo from '../assets/fdm_Logo2.png';
import Particles from "react-tsparticles";
import Par from "./Par";

function Welcome({users,Login}){
    return(
            <div className="loginPageStuff">
              <Par />
          <div className="logoSec">
            <img className="logo" src={fdmLogo} alt="" />
            <h1>Training and Scheduling</h1>
          </div>
            <LoginForm users = {users} Login = {Login}/>
            
        </div>
    )
}

export default Welcome;