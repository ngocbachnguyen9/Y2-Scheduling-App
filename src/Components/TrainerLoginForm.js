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
        <div>
            <h1>Trainer Login</h1>
            <form id="loginform" onSubmit={handleSubmit}>
                <fieldset>
                    <label for="email">Email</label>
                    <br></br>
                    <input type="email" id="email" name="email" onChange={handleChangeEmail} value={loginDetails.ID} required></input>
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

export default TrainerLoginForm;