import React from 'react';
import proPetsSVG from '../Images/proPets.svg';
import questionSVG from '../Images/question.svg';
import lupaSVG from '../Images/lupa.svg'
const Header = () => {
    return (
        <div>
            <div>
                <img src={proPetsSVG}/>
            </div>
            <div>
                <button>
                    <img src={lupaSVG}/>
                    <p>I lost my pet</p>
                </button>
            </div>
            <div>
                <button>
                    <img src={questionSVG}/>
                    <p>I found a pet</p>
                </button>
            </div>
        </div>
    );
};

export default Header;