import React, {useState} from 'react';
import pet from "../../../utils/Images/petAvatar.png";
import {BiPencil} from "react-icons/bi";
import {GiDisc} from "react-icons/gi";
import {bindActionCreators} from "redux";
import {editUser} from "../../../Redux/actions/accountingActions";
import {connect} from "react-redux";

const EditUser = ({nickName, editUser, userPhone, userAvatar}) => {

    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');


    const handleClickCancel = () => {
        setPhone('');
        setName('');
        setAvatar('');
    }


    const handleClickSubmit = () => {
        editUser(name || nickName, avatar || userAvatar, phone || userPhone);
        handleClickCancel();
    }

    return (
        <>
            <div className='container shadow'>
                <div className='row Visit'>
                    <div className='img ml-2 mt-3 col-1'>
                        <img className='pet' src={pet} alt='pet'/>
                    </div>
                    <div className='p offset-1 col-2 mt-4 mr-2 '>
                        <p className='Name'>{nickName}<span><BiPencil/></span></p>
                    </div>
                </div>
                <div className='row t1 mt-3 ml-3'>
                    <label className='i1'>Phone:</label>
                    <input onChange={(event) => setPhone(event.target.value)} className='l1 ml-3 mb-2 col-6'
                           value={phone} type='text'
                           placeholder='helenjohnson@gmail.com'/>
                </div>
                <div className='row t2 mt-3 '>
                    <label className='i2 ml-4'>Avatar:</label>
                    <input className='l2 ml-3 mb-2 col-6' onChange={(event) => setAvatar(event.target.value)}
                           value={avatar} type='avatar' placeholder='enter url of new avatar'/>
                </div>
                <div className='row t3 mt-3 ml-2'>
                    <label className='i3'>Name:</label>
                    <input value={name} onChange={(event) => setName(event.target.value)}
                           className=' l3 ml-3 mb-2 col-6' type='text'
                           placeholder='enter name you would like to change'/>
                </div>
            </div>
            <div className='container mt-3 ml-3 '>
                <div className='row BTN'>
                    <button onClick={() => handleClickCancel()} className='b1 offset-5 col-2'>Cancel</button>
                    <button onClick={() => handleClickSubmit()} className='b2 offset-1 col-2'><GiDisc/>Save changes
                    </button>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = state => {
    return {
        nickName: state.accountingReducer.nickName,
        userAvatar: state.accountingReducer.user_avatar,
        userPhone: state.accountingReducer.phone,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({editUser}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser);