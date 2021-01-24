import React, { useState } from 'react'

function Signup() {
    const [usernameInput, setUsernameInput] = useState('')
    const [fullNameInput, setFullNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [cpasswordInput, setCPasswordInput] = useState('')

    return (
        <div>
            
            <form className='login-form center-box'>
            <h1 className='center-text'>Signup Below</h1>
                <label>
                    Username (Email): <input type="text" value={usernameInput} onChange={(event) => setUsernameInput(event.target.value)}></input>
                </label>
                <label>
                    Full Name: <input type="text" value={fullNameInput} onChange={(event) => setFullNameInput(event.target.value)}></input>
                </label>
                <label>
                    Password: <input type="password" value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)}></input>
                </label>
                <label>
                    Confirm Password: <input type="password" value={cpasswordInput} onChange={(event) => setCPasswordInput(event.target.value)}></input>
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

export default Signup
