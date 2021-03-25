import React from 'react';
import preview_dog from "../../../utils/Images/preview_dog.png";
import {AiOutlineMessage, AiOutlinePhone, CgTrash, IoLocationOutline, TiPencil} from "react-icons/all";
import {pet_avatar} from "../../../utils/constants/constants";
import {AiFillFacebook} from "react-icons/ai";

const EditActivities = () => {
    return (
        <div className='container ALL shadow'>
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
};

export default EditActivities;