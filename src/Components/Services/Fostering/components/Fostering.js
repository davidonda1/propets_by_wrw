import React from "react";
import forsteringImg from '../Images/fosteringImg.png';
import petAvatar from '../Images/petAvatar.png';
const Fostering = () => {
    return (
        <div>
            <div>
                <p>Fostering. In adoption we trust.</p>
            </div>
            <div>
                <div><img src={petAvatar}/></div>
                <div>
                    <label>John Goodboi</label>
                    <label>2 h</label>
                </div>
                <div><img src={forsteringImg}/></div>
                <div>
                    {/* TODO link*/}
                    <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack {/*<a href={} …more*/}</p>
                    <label></label>
                </div>
            </div>
        </div>
    );
};
export default Fostering;