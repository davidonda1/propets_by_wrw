import React, {useState} from 'react';
import pet from '../../../utils/Images/petImg.png';
import propetsSVG from '../../../utils/Images/propetsImg.svg';
import Register from '../components/Register/components/Register';
import {GiMagnifyingGlass} from "react-icons/gi";
import '../css_module/guest.css';
import {connect} from "react-redux";

const Guest = ({error, message}) => {


    const [register, setRegister] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const token = localStorage.getItem('token');

    const showFullPage = () => {
        if (!token && !error && !message) {
            return (
                <>
                    <div onClick={() => setRegister(true)} className="i_lost_pet">
                        <p className={'i_lost_text'}>I lost my pet! <GiMagnifyingGlass/></p>
                    </div>
                    <div onClick={() => setRegister(true)} className="i_found_pet">
                        <p className={'i_found_text'}>I found a pet!</p>
                    </div>
                    <div className="text">
                        <p className={'welcome_text'}>Welcome to your <br/>
                            <span className={'welcome_text_green'}>pawfessional</span><br/>
                            community</p>
                    </div>
                    <div className="pet">
                        <img src={pet} alt={'pet'}/>
                    </div>
                    <p className="join_text">
                        I’m okay, just want to
                        <span onClick={() => setRegister(true)} className={'join'}>join</span>
                        the pawsome community!
                    </p>
                </>
            );
        } else if (token || message) {
            return <label className="spinner-border guest_spinner text-success"/>
        } else {
            if (error && !token) {
                return (
                    <div className="alert alert-danger main_danger">
                        <strong>Wrong password!</strong> <label className='try_again_guest'
                                                                onClick={() => setRegister(true)}>Try again</label>
                    </div>
                )
            } else {
                return <label className="spinner-border guest_spinner text-success"/>
            }
        }
    }

    return (
        <div className={`grid-container`}>
            <div className="header"></div>
            <div className="propets">
                <img src={propetsSVG} alt={'propet'}/>
            </div>
            <div className="sign_in">
                <button onClick={() => setRegister(!register)} className={'sign_in_button'}>Sign in</button>
            </div>
            {register ?
                <div className="main"><Register submit={setSubmitted} cancel={setRegister}/></div> : showFullPage()}
            <div className="footer"></div>
        </div>
    );
};

// TODO footer

const mapStateToProps = state => {
    return {
        error: state.accountingReducer.error,
        message: state.accountingReducer.message,
    }
}

export default connect(mapStateToProps)(Guest);