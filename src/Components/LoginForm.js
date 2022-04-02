import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm({users,Login}) {

    const [loginDetails,setLoginDetails] = useState({email:"",password:""});
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        var success = false;
        for (let i = 0; i < {users}.users.length; i++) {
            if(loginDetails.email === {users}.users[i].email && loginDetails.password === {users}.users[i].password){
                if({users}.users[i].userType === "staff"){
                    navigate("/staffdash")
                }
                else{
                    navigate("/trainerdash")
                }
                success = true
                Login(loginDetails)
                break
            }
            if(success === false){
                document.getElementById("submit").value = "Incorrect Details. Try Again"
            }
        }
    }
    

    return(
        <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                <div className="input-container">
                    <input type="email"  name="email" id="email" onChange={e => setLoginDetails({...loginDetails, email: e.target.value})} value={loginDetails.email}></input>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input type="password"  name="password" id="pword" onChange={e => setLoginDetails({...loginDetails, password: e.target.value})} value={loginDetails.password}></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="submit-container">
                    <input id="submit" className = "submit-button" type="submit" value="Log In"></input>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;