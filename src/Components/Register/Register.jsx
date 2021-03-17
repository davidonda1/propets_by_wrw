import React, {useState} from 'react';
import './css_module/register.css'
import propetsImg from './Images/propets_img.svg'
import { FaFacebook} from "react-icons/fa";
import { MdPets } from "react-icons/md";

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
            <>
                <div className="name">
                    <label>Name:</label>
                </div>
                <div className="input_name">
                    <input type={'text'} placeholder={'Example example'}/>
                </div>
                <div className="email">
                    <label>Email:</label>
                </div>
                <div className="email_input">
                    <input type={'text'} placeholder={'example@gmail.com'}/>
                </div>
                <div className="pswrd">
                    <label>Password:</label>
                </div>
                <div className="pswrd_2">
                    <label>Repeat password:</label>
                </div>
                <div className="pswrd_input">
                    <input type={'password'} placeholder={'example'}/>
                </div>
                <div className="pswrd2_input">
                    <input type={'password'} placeholder={'example'}/>
                </div>
            </>
        )
    }
    return (

        <div className="grid-container">


            <label className="name">Name:</label>


            <input className="input_name" type={'text'} placeholder={'   Helen Johnson'}/>


            <label className="email">Email:</label>


            <input className="email_input" type={'text'} placeholder={'   helenjohnson@gmail.com'}/>


            <label className="pswrd">Password:</label>


            <label className="pswrd_2">Password:</label>


            <input className="pswrd_input" type={'password'} placeholder={'   *****************'}/>


            <input className="pswrd2_input" type={'password'} placeholder={'   *****************'}/>


            <div className="welcome_text">
                <h4><span className='welcome_span'>Welcome!</span> Please sign in / sign up to continue or</h4>
            </div>
            <div className="propets">
                <img className='propets_img' src={propetsImg} alt={'propetsImg'}></img>
            </div>
            <div className="facebook_btn">

                <p className='facebook_btn_text'><FaFacebook/>Enter with Facebook</p>
            </div>
            <div className="signup_btn">
                <p className="signup_btn_text">Sign up</p>
            </div>
            <div className="signin_btn">
                <p className="signin_btn_text">Sign in</p>
            </div>
            <div className="text">
                <p>By clicking “Submit”, you agree to us processing your information in accordance with these terms.</p>
            </div>
            <div className="cancel_btn">
                <p className="cancel_btn_text">Cancel</p>
            </div>
            <div className="submit_btn">

                <p className="submit_btn_text"><MdPets/>Submit</p>
            </div>
            <div className="signin_txt">
                <p>Password must have at least 8 characters with at least one Capital letter, at least one lower case
                    letter and at least one number or special character.</p>
                <p>Please re-enter your password</p>

            </div>
        </div>
    );
};

export default Register;