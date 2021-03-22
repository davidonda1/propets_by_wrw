import React from 'react';

const EditUser = () => {
    return (
        <div>
            <img alt={'dog'}/>
            <p>Anna smith</p>
            <button>Change name</button>
            <div>
                <label>Email:</label>
                <input type={'text'} placeholder={'example@gmail.com'}/>
                <label>Phone:</label>
                <input type={'number'} placeholder={'00000000000'}/>
                <label>FB link:</label>
                <input type={'text'} placeholder={'https://www.facebook.com/anna.smith908430'}/>
            </div>
        </div>
    );
};

export default EditUser;