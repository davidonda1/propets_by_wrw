import React from 'react';
import manWithPetImg from '../Images/manWithPetImg.svg';
import questionImg from '../Images/questionImg.svg';
import petAvatar from '../Images/petAvatar/petAvatar.png';
const PetFind = () => {
    return (
        <div>
            <div>
                <p>Found a pet? Please complete the form to help.</p>
            </div>
            <div>
                <div>
                    <div>
                        <label>Type:</label>
                        <select></select>
                    </div>
                    <div>
                        <label>Sex:</label>
                        <select></select>
                    </div>
                    <div>
                        <label>Breed:</label>
                        <input placeholder='Golden Retriever'/>
                    </div>
                    <div>
                        <label>Color:</label>
                        <input placeholder='Beige'/>
                    </div>
                    <div>
                        <label>Height:</label>
                        <select></select>
                    </div>
                    <div>
                        <label>Distinktive features:</label>
                        <label>up to 60 char</label>
                        <textarea placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>
                    <div>
                        <label>Description:</label>
                        <label>up to 150 char</label>
                        <textarea placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'/>
                    </div>
                    <div>
                        <label>Location:</label>
                        <textarea placeholder='Florentin Street, Tel Aviv'/>
                    </div>

                </div>
                <div>
                    <img src={manWithPetImg}/>
                </div>
                <div>
                    <img src={questionImg}/>
                    <p>Drag and drop photos or</p>
                    <button>Browse</button>
                </div>
                <div>
                    <textarea placeholder='img1.jpg'></textarea>
                </div>
                <div>
                    <p>Contacts:</p>
                    <input placeholder='Phone*'/>
                    <input placeholder='Email'/>
                    <input placeholder='Facebook profile'/>
                </div>
                <div>
                    <div>
                        <img src={petAvatar}/>
                    </div>
                 <div>
                     <p>John Goodboi</p>
                 </div>
                    <div>
                        <p></p>
                        <p>Publish</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PetFind;