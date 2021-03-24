import React from 'react';
import '../css_module/editUser.css';
import pet from '../../../utils/Images/petAvatar.png';
import preview_dog from '../../../utils/Images/preview_dog.png';
import {GiDisc} from "react-icons/gi";
import {BiPencil} from "react-icons/bi";
import {AiOutlineMessage, AiOutlinePhone, CgTrash, IoLocationOutline, TiPencil} from "react-icons/all";
import {pet_avatar} from "../../../utils/constants/constants";
import {AiFillFacebook} from "react-icons/ai";
import {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {editUser} from '../../../Redux/actions/accountingActions';

const EditUser = ({nickName, editUser}) => {

    const noneActive = 'noneActive';
    const active = 'active'

    const [edit, setEdit] = useState(true);

    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    const handleClickCancel = () => {
        if (edit) {
            setPhone('');
            setName('');
            setAvatar('');
        }
    }

    const handleClickSubmit = () => {
        editUser(name, avatar, phone);
        setMessage('Loading...');
    }


    const renderEdit = () => {
        return (
            <div className='container'>
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
                    <input onChange={(event) => setPhone(event.target.value)} className='l1 ml-3 mb-2 col-6' value={phone} type='text'
                           placeholder='helenjohnson@gmail.com'/>
                </div>
                <div className='row t2 mt-3 '>
                    <label className='i2'>Avatar:</label>
                    <input className='l2 ml-3 mb-2 col-6' onChange={(event) => setAvatar(event.target.value)} value={avatar} type='avatar' placeholder='password'/>
                </div>
                <div className='row t3 mt-3 ml-2'>
                    <label className='i3'>Name:</label>
                    <input value={name} onChange={(event) => setName(event.target.value)}
                           className=' l3 ml-3 mb-2 col-6' type='text'
                           placeholder='enter name you would like to change'/>
                </div>
            </div>
        );
    }
    const renderNorm = () => {
        return (

            <div className='container ALL'>
                <div className='row  '>
                    <img className='col-5 mt-3 mb-3' src={preview_dog} alt='preview_dog'/>
                    <div className='container  col-6'>
                        <div className='row mt-3 mb-3'>
                            <p className='INFO '>Dog, Golden Retriever</p>
                            <p className='POINTER'><TiPencil color='black'/><CgTrash color='black'/></p>
                        </div>
                        <div className='row P'>
                            <div className='row col-6'>
                                <p><span>Color:</span> golden</p>
                                <p><span>Sex:</span> male</p>
                                <p><span>Sex:</span> male</p>
                            </div>
                            <div className='row col-6'>
                                <p className=''><span>Distinctive features: </span> blue collar with stars, no left ear,
                                    damaged tail.</p>
                            </div>
                            <div className='row'>
                                <p><span>Description:</span> brown fox jumps over a lazy dog. DJs flock by when MTV ax
                                    quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                                </p>
                            </div>

                        </div>
                        <div className='row'>
                            <p><IoLocationOutline color='black'/> Florentin, 27, Tel Aviv</p>
                        </div>
                        <div className='row POINTER'>
                            <p className='col-8'><img src={pet_avatar} alt='pet_avatar'/><span>John Goodboi </span></p>
                            <p className='col-4'><AiOutlinePhone/><AiFillFacebook/><AiOutlineMessage/></p>
                        </div>
                        <div className='row'>
                            <p className='clock'>Dec 12, 2019</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='container'>
            <p>{message}</p>
            <div className='container mt-3 ml-3'>
                <div className='row'>
                    <p className='p '><span className='span'>Your profile.</span> Change, edit and manage your data.</p>
                </div>
            </div>
            <div className='container mt-3 ml-3 c1 col-10 '>
                <div className='row Profiles'>
                    <div onClick={() => setEdit(true)} className={`MyProfile col-6 ${edit ? active : noneActive}`}>
                        <p className='MyProfile_p mt-2'>My profile</p>
                    </div>
                    <div onClick={() => setEdit(false)} className={`Activites col-6 ${edit ? noneActive : active}`}>
                        <p className='Activites_p mt-2 '>Activites</p>
                    </div>
                </div>
                {edit ? renderEdit() : renderNorm()}

            </div>
            <div className='container mt-3 ml-3 '>
                <div className='row BTN'>
                    <button onClick={() => handleClickCancel()} className='b1 offset-5 col-2'>Cancel</button>
                    <button onClick={() => handleClickSubmit()} className='b2 offset-1 col-2'><GiDisc/>Save changes</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        nickName: state.accountingReducer.nickName,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({editUser}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser);