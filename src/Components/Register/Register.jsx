import React, {useState} from 'react';

const Register = () => {

    const [mode, setMode] = useState(false);

    const signIn = () => {
        return (
            <div>
            <label>Email:</label>
                <input type={'text'} placeholder={'example@gmail.com'}></input>
                <label>Password:</label>
                <input type={'password'} placeholder={'password'}></input>
            </div>
        )
    }

    const signUp = () => {
        return (
            <div>
                <label>Name:</label>
                <input type={'text'} placeholder={'Example example'}/>
                <label>Email:</label>
                <input type={'text'} placeholder={'example@gmail.com'}/>
                <label>Password:</label>
                <input type={'password'} placeholder={'example'}/>
                <label>Repeat password:</label>
                <input type={'password'} placeholder={'example'}/>
                <p onClick={() => alert('Forgot password')}>Forgot password?</p>
            </div>
        )
    }
    return (
        <div>
            <header>
                {
                    // TODO
                     }
                    <img src={'/'} alt={''}></img>
                <h1>Welcome! Please sign in / sign up to continue or</h1>
                <button>Facebook</button>
            </header>
            <main>
                <button>Sign in</button>
                <button>Sign up</button>
                {mode ? signIn() : signUp()}
            </main>
            <footer>
                <p>By clicking “Submit”, you agree to us processing your information in accordance with these terms.</p>
                <button>Cancel</button>
                <button>Submit</button>
            </footer>
        </div>
    );
};

export default Register;