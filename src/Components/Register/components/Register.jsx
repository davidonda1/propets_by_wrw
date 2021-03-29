import React, {useState} from 'react';
import '../css_module/register.css'
import {FaFacebook} from "react-icons/fa";
import {MdPets} from "react-icons/md";
import {bindActionCreators} from "redux";
import {loginUser, registerUser} from '../../../Redux/actions/accountingActions';
import {connect} from "react-redux";
import {createToken} from "../../../utils/constants/accountingConstants";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Register = ({loginUser, registerUser}) => {

    const [mode, setMode] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('');


    const handleClickCancel = () => {
        if (mode) {
            setPassword('');
            setEmail('');
            setName('');
            setRepeatPass('');
        } else {
            setEmail('');
            setPassword('');
        }

    }

    const handleClickSubmit = () => {
        if (!mode) {
            if (password && email) {
                const token = createToken(email, password);
                loginUser(token);
                handleClickCancel();
            }
        } else {
            if (password === repeatPass && password && repeatPass && email && name) {
                registerUser(name, email, password);
                handleClickCancel();
            } else {
                alert(`Password and repeat password are not the same \n 
                Please try again`);
            }
        }
    }

    const conditionRender = () => {
        if (mode) {
            return (
                <SignUp setPassword={setPassword}
                        setEmail={setEmail}
                        setRepeatPass={setRepeatPass}
                        setName={setName}
                        email={email}
                        password={password}
                        name={name}
                        repeatPass={repeatPass}/>
            )
        } else {
            return (
                <SignIn setPassword={setPassword}
                        setEmail={setEmail}
                        email={email}
                        password={password}/>
            )
        }

    }


    const active_class = 'active_class';
    const none_active_class = 'none_active_class';


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
            {conditionRender()}
        </div>

    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loginUser, registerUser}, dispatch)
}

const mapStateToProps = state => {
    return {
        token: state.accountingReducer.token
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);