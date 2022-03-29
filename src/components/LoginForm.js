import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <form>
                <div className="input-container">
                    <label>Email: </label>
                    <input type="email" name="email" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password: </label>
                    <input type="password" name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm