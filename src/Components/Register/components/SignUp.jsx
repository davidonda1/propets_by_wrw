import React from 'react';

const SignUp = ({setName, name, setEmail, email, setPassword, password, setRepeatPass, repeatPass}) => {
    return (
        <>
            <label className="name">Name:</label>

            <input className="input_name"
                   onChange={(event) => setName(event.target.value)}
                   type={'text'}
                   placeholder={'Helen Johnson'}
                   value={name}
            />

            <label className="email">Email:</label>

            <input className="email_input"
                   onChange={(event) => setEmail(event.target.value)}
                   type={'text'}
                   placeholder={'helenjohnson@gmail.com'}
                   value={email}
            />

            <label className="pswrd">Password:</label>

            <label className="pswrd_2">Repeat password:</label>

            <input className="pswrd_input"
                   onChange={(event) => setPassword(event.target.value)}
                   type={'password'}
                   placeholder={'*****************'}
                   value={password}
            />

            <input className="pswrd2_input"
                   onChange={(event) => setRepeatPass(event.target.value)}
                   type={'password'}
                   placeholder={'*****************'}
                   value={repeatPass}/>

            <div className="welcome_text">
                <h4><span className='welcome_span'>Welcome!</span> Please sign in / sign up to continue or</h4>
            </div>
            <div className="signin_txt">
                <p>Password must have at least 8 characters with at least one Capital letter, at least one lower
                    case
                    letter and at least one number or special character.</p>
                <p>Please re-enter your password</p>
            </div>
        </>
    );
};

export default SignUp;