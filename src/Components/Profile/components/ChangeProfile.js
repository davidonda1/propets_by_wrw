import React from 'react';
import '../css_module/editUser.css';
import {useState} from "react";
import Profile from "./EditUser";
import {connect} from "react-redux";
import EditActivities from "./EditActivities";

const ChangeProfile = ({message}) => {

    const noneActive = 'noneActive';
    const active = 'active'

    const [edit, setEdit] = useState(true);

    return (
        <div className='container'>
            <p>{message ? <label className="spinner-border text-dark"/> : ''}</p>
            <div className='container mt-3 ml-3'>
                <div className='row'>
                    <p className='p '><span className='span'>Your profile.</span> Change, edit and manage your data.</p>
                </div>
            </div>
            <div className='container mt-3 ml-5 c1 col-10 '>
                <div className='row mb-4 Profiles'>
                    <div onClick={() => setEdit(true)} className={`MyProfile col-6 ${edit ? active : noneActive}`}>
                        <p className='MyProfile_p mt-2'>My profile</p>
                    </div>
                    <div onClick={() => setEdit(false)} className={`Activites col-6 ${edit ? noneActive : active}`}>
                        <p className='Activites_p mt-2 '>Activites</p>
                    </div>
                </div>
            </div>
            {edit ? <Profile/> : <EditActivities/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        message: state.accountingReducer.message,
    }
}

export default connect(mapStateToProps)(ChangeProfile);
