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
        <div>
            <h1>Staff Login</h1>
            <form id="loginform" onSubmit={handleSubmit}>
                <fieldset>
                    <label for="ID">ID</label>
                    <br></br>
                    <input type="number" id="IDNumber" name="ID" onChange={handleChangeID} value={loginDetails.ID} required></input>
                    <br></br>
                    <label for="pword">Password </label>
                    <br></br>
                    <input type="password" id="pword" name="pword" onChange={handleChangePassword} value={loginDetails.password} required></input>
                    <br></br>
                    <input id = "login" type="submit" value="Log In"></input>
                </fieldset>
            </form>
        </div>
    );
}

export default StaffLoginForm;