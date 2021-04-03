import React from 'react';

const SignIn = ({setPassword, setEmail, email, password}) => {

    return (
        <>
            <label className='name'>Email:</label>
            <input onChange={(event) => setEmail(event.target.value)} className="input_name" type={'text'}
                   value={email} placeholder={'example@gmail.com'}/>
            <label className="email">Password:</label>
            <input onChange={(event) => setPassword(event.target.value)} className="email_input" type={'password'}
                   value={password} placeholder={'password'}/>
        </>
    );
};

export default SignIn;