import React,{useState} from "react";

function StaffLoginForm({Login}) {

    const [loginDetails,setLoginDetails] = useState({ID:"",password:""});


    function handleSubmit(event){
        event.preventDefault();
        Login(loginDetails);
    }

    function handleChangeID(event){
        setLoginDetails({...loginDetails, ID:event.target.value});
    }

    function handleChangePassword(event){
        setLoginDetails({...loginDetails, password:event.target.value});
    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="number"  name="ID" id="IDNumber" onChange={handleChangeID} required></input>
                    <span></span>
                    <label>ID</label>
                </div>
                <div className="input-container">
                    <input type="password"  name="pass" id="pword" onChange={handleChangePassword} required></input>
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

export default StaffLoginForm;