import React from 'react';
import pet from '../Images/petImg/petImg.png';
import propetsSVG from '../Images/propetsImg.svg';
import lupaSVG from '../Images/lupa.svg'
const Guest = () => {
    return (
        <div>
            <div>
                <div>
                    <img src={propetsSVG}/>
                    {/*TODO svg*/}
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </div>
            <div>
                <div>
                    <p>Welcome to your pawfessional community</p>
                </div>
                <div>
                    <img src={pet}/>
                </div>
                <div>
                    <button>I lost my pet!</button>
                    <img src={lupaSVG}/>
                </div>
                <div>
                    <button>I found a pet!</button>
                </div>
                <div>
                    {/*TODO link*/}
                    <p>I’m okay, just want to {/*<a href='' join/>*/} the pawsome community!</p>
                </div>

            </div>
            <div>
                {/*ToDo footer*/}

            </div>
        </div>
    )
        ;
};

export default Guest;