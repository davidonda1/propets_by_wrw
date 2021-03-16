import React from "react";
import petAvatar from '../Images/petAvatar.png';
import vetHeplpImg from '../Images/vetHelpImg.png';
const VetHelp = () => {
    return (
        <div>
            <div>
                <p>VetHelp. They deserve it.</p>
            </div>
            <div>
                <div><img src={petAvatar}/></div>
                <div>
                    <label>John Goodboi</label>
                    <label>2 h</label>
                </div>
                <div><img src={vetHeplpImg}/></div>
                <div>
                    {/* TODO link*/}
                    <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack {/*<a href={} …more*/}</p>
                    <label></label>
                </div>
            </div>
        </div>
    );
};
export default VetHelp;