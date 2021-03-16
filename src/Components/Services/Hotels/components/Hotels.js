import React from 'react';
import petAvatar from '../Images/petAvatar.png';
import petImg from '../Images/petImg.png';
const Hotels = () => {
    return (
        <div>
            <div>
                <p>Hotels. Go to vacations — we’ll take care of your pet!</p>
            </div>
            <div>
                <div><img src={petAvatar}/></div>
                <div>
                    <label>John Goodboi</label>
                    <label>2 h</label>
                </div>
                <div><img src={petImg}/></div>
                <div>
                   {/* TODO link*/}
                    <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack{/* <a href={} …more*/}</p>
                    <label></label>
                </div>
            </div>
        </div>
    );
};

export default Hotels;