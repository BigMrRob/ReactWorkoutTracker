import React, { useState } from 'react'
import Signup from './Signup'

function Login() {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <div >
            
            <form className='login-form center-box'>
            <h1 className='center-text'>Login Below</h1>
                <label>
                    Username: <input type="text" value={usernameInput} onChange={(event) => setUsernameInput(event.target.value)}></input>
                </label>
                <label>
                    Password: <input type="password" value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)}></input>
                </label>
                
                <div className="buttons">
                    
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            </form>
            <p className='center-text' style={{fontSize: '12px'}}><em>Dont Have an account? Click Signup to Create An Account</em></p>
        </div>
    )
}

export default Login
