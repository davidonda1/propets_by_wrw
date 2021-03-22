import React from 'react';
import '../css_module/found.css'
import preview_dog from "../../../utils/Images/preview_dog.png";
import {AiOutlineMessage, AiOutlinePhone, IoLocationOutline} from "react-icons/all";
import {pet_avatar} from "../../../utils/constants/constants";
import {AiFillFacebook} from "react-icons/ai";


const Found = () => {

    const renderInput = () => {
        return (
            <div className='container INPUT_HEADER mb-3 mt-3'>
                <div className='row INPUT mt-3 mb-3'>
                    <input className='INPUT_text' type='text ' placeholder='Type '/>
                    <input className='INPUT_text' type='text ' placeholder='Breed'/>
                    <input className='INPUT_text' type='text ' placeholder='Additional features'/>
                    <input className='INPUT_text' type='text ' placeholder='Location'/>
                </div>

            </div>
        );

    }
    const renderFoundPost = () => {
        return(
            <div className='container ALL '>
                <div className='row  '>
                    <img className='col-5 mt-3 mb-3' src={preview_dog} alt='preview_dog'/>
                    <div className='container  col-6'>
                        <div className='row mt-3 mb-3'>
                            <p className='INFO '>Dog, Golden Retriever</p>
                            {/*    <p className='POINTER'><TiPencil color='black'/><CgTrash color='black'/></p>*/}
                        </div>
                        <div className='row P'>
                            <div className='row col-4'>
                                <p><span>Color:</span> golden</p>
                                <p><span>Sex:</span> male</p>
                                <p><span>Height:</span> 45cm</p>
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
        <div>
            { renderInput()}
            {renderFoundPost()}
        </div>
    );
};

export default Found;