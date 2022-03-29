import React from 'react'

const LoginForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form">
                    <div className="input-container">
                        <input type="email" name="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="input-container">
                        <input type="password" name="pass" required />
                        <span></span>
                        <label>Password: </label>
                    </div>
                    <div className="button-container">
                        <input className="submit-button" type="submit" value="Login" />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default LoginForm