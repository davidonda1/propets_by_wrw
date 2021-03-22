import React, {useState} from 'react';
import '../css_module/register.css'
import {FaFacebook} from "react-icons/fa";
import {MdPets} from "react-icons/md";
import {HOME_PAGE} from "../../../utils/constants/constants";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {loginUser} from '../../../Redux/actions/accountingActions';
import {connect} from "react-redux";

const Register = ({loginUser}) => {

    const [mode, setMode] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickCancel = () => {
        setPassword('');
        setEmail('');
    }

    const handleClickSubmit = () => {
        loginUser(email, password);
    }


    const active_class = 'active_class';
    const none_active_class = 'none_active_class';

    const signIn = () => {
        return (
            <>
                <label className='name'>Email:</label>
                <input onChange={(event) => setEmail(event.target.value)} className="input_name" type={'text'}
                       value={email} placeholder={'example@gmail.com'}></input>
                <label className="email">Password:</label>
                <input onChange={(event) => setPassword(event.target.value)} className="email_input" type={'password'}
                       value={password} placeholder={'password'}></input>
            </>
        )
    }

    const signUp = () => {
        return (
            <>
                <label className="name">Name:</label>

                <input className="input_name" type={'text'} placeholder={'   Helen Johnson'}/>

                <label className="email">Email:</label>

                <input className="email_input" type={'text'} placeholder={'   helenjohnson@gmail.com'}/>

                <label className="pswrd">Password:</label>

                <label className="pswrd_2">Repeat password:</label>

                <input className="pswrd_input" type={'password'} placeholder={'   *****************'}/>

                <input className="pswrd2_input" type={'password'} placeholder={'   *****************'}/>

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
        )
    }
    return (
        <div className='grid-container'>
            <div className="welcome_text">
                <h4><span className='welcome_span'>Welcome!</span> Please sign in / sign up to continue or</h4>
            </div>
            <div className="facebook_btn">

                <p className='facebook_btn_text'><FaFacebook/>Enter with Facebook</p>
            </div>
            <div onClick={() => setMode(true)} className={`signup_btn ${mode ? active_class : none_active_class}`}>
                <p className="signup_btn_text">Sign up</p>
            </div>
            <div onClick={() => setMode(false)} className={`signin_btn ${mode ? none_active_class : active_class}`}>
                <p className="signin_btn_text">Sign in</p>
            </div>
            <div className="cancel_btn" onClick={() => handleClickCancel()}>
                <button className="cancel_btn_text">Cancel</button>
            </div>
            <div className="submit_btn" onClick={() => handleClickSubmit()}>
                    <button className="submit_btn_text"><MdPets/>Submit</button>
            </div>
            {mode ? signUp() : signIn()}
        </div>

    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loginUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(Register);