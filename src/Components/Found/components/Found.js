import React, {useEffect} from 'react';
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineMessage, AiOutlinePhone, IoLocationOutline} from "react-icons/all";
import '../css_module/found.css'
import {bindActionCreators} from "redux";
import {getFoundPosts} from "../../../Redux/actions/postFoundActions";
import {connect} from "react-redux";

const Lost = ({getFoundPosts, foundPosts}) => {

    useEffect(() => {
        getFoundPosts();
    }, [])

    const renderInput = () => {
        return (
            <div className='container INPUT_HEADER mb-3 mt-3'>
                <div className='row INPUT mt-3 mb-3'>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Type '/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Breed'/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Additional features'/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Location'/>
                </div>
            </div>

        );
    }

// TODO lost and found render posts in the same way. It should do a different component in matter who calls it (props ? ... : ...)
    const renderLostPost = () => {
        if (foundPosts) {
            return (
                foundPosts.map(item => {
                    return (
                        <div key={item.id} className='container found_posts shadow ALL mt-1 mb-4'>
                            <div className='row'>
                                <img className='col-5 mt-3 mb-3' src={item.photos[0]} alt='lost_pet'/>
                                <div className='container col-6'>
                                    <div className='row mt-3 mb-3'>
                                        <p className='INFO '>{item.type}, {item.breed}</p>
                                    </div>
                                    <div className='row P'>
                                        <div className='row col-4'>
                                            <p><span>Color:</span> {item.color || 'white'}</p>
                                            <p><span>Sex:</span> {item.sex}</p>
                                            <p><span>Height:</span> {item.height || '45cm'}</p>
                                        </div>
                                        <div className='row col-6'>
                                            <p className=''><span>Distinctive features: </span> blue collar with stars,
                                                no left ear,
                                                damaged tail.</p>
                                        </div>
                                        <div className='row ml-1'>
                                            <p><span>Description:</span> brown fox jumps over a lazy dog. DJs flock by
                                                when MTV ax
                                                quiz dog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
                                                vex nymphs.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <p><IoLocationOutline
                                            color='black'/> {item.address.country}, {item.address.city}, {item.address.street}, {item.address.building}
                                        </p>
                                    </div>
                                    <div className='row POINTER'>
                                        <p className='col-8'><img src={item.avatar}
                                                                  alt='pet_avatar'/><span>{item.userName}</span></p>
                                        <p className='col-4'><AiOutlinePhone/><AiFillFacebook/><AiOutlineMessage/></p>
                                    </div>
                                    <div className='row'>
                                        <p className='clock'>{item.datePost}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            );
        } else {
            return <span className='spinner-grow offset-6 spinner_found text-success'/>
        }
    }
    return (
            <>
                {renderInput()}
                {renderLostPost()}
            </>
    )
};

const mapStateToProps = state => {
    return {
        foundPosts: state.lost_found_post_reducer.foundPosts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getFoundPosts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Lost);