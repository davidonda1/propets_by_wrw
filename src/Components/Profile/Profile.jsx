import React, {useState} from 'react';
import Edit_User from "./Edit_User";
import Activities from "./Activities";

const Profile = () => {
    const [mode, setMode] = useState(true);
    return (
        <div>
            <h2>Your profile. Change, edit and manage your data.</h2>
            <div>
                <button onClick={() => setMode(true)}>My profile</button>
                <button onClick={() => setMode(false)}>Activities</button>
            </div>
            {mode ? <Edit_User/> : <Activities/>}
        </div>
    );
};

export default Profile;