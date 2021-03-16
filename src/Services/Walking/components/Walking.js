import React from "react";
import petAvatar from '../Images/petAvatar.png';
import walkingImg from '../Images/walkingImg.png';
const Walking = () => {
    return (
        <div>
            <div>
                <p>Walking. No time tonight? We have a solution!</p>
            </div>
            <div>
                <div><img src={petAvatar}/></div>
                <div>
                    <label>John Goodboi</label>
                    <label>2 h</label>
                </div>
                <div><img src={walkingImg}/></div>
                <div>
                    {/* TODO link*/}
                    <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack {/*<a href={} …more*/}</p>
                    <label></label>
                </div>
            </div>
        </div>
    );
};
export default Walking;