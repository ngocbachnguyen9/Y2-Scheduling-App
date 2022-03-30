import React,{useState} from "react";

function TrainerLoginForm({Login}) {

    const [loginDetails,setLoginDetails] = useState({email:"",password:""});


    function handleSubmit(event){
        event.preventDefault();
        Login(loginDetails);
    }

    function handleChangeEmail(event){
        setLoginDetails({...loginDetails, email:event.target.value});
    }

    function handleChangePassword(event){
        setLoginDetails({...loginDetails, password:event.target.value});
    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="email" name="email" onChange={handleChangeEmail} required></input>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input type="password" name="pass" onChange={handleChangePassword} required></input>
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

export default TrainerLoginForm;