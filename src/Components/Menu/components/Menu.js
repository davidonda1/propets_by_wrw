import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {
    HOME_PAGE,
    LOST_PAGE,
    FOUND_PAGE, FAVORITES, USER_PAGE, VET_HELP, HOTELS, FOSTERING, WALKING, LOST_POST, FOUND_POST
} from "../../../utils/constants/constants";
import Favorites from "../../Favorites/components/Favorites";
import VetHelp from '../../Services/VetHelp/components/VetHelp'
import Home from '../../Home/components/Home'
import EditUser from "../../Profile/components/ChangeProfile";
import Header from "./Header/components/Header";
import LeftBar from "./Left_Bar/components/LeftBar";
import RightBar from "./RightBar/components/RightBar";
import Hotels from "../../Services/Hotels/components/Hotels";
import Fostering from "../../Services/Fostering/components/Fostering";
import Walking from "../../Services/Walking/components/Walking";

import Found from "../../Found/components/Found";
import Lost from "../../Lost/components/Lost";
import Lost_Or_Found_Post from "../../Posts/components/Lost_Or_Found_Post";


const Menu = ({page}) => {

    const [headerMode, setHeaderMode] = useState('');

    useEffect(() => {
        if (page === LOST_PAGE || page === FOUND_PAGE) {
            setHeaderMode('lost')
        } else {
            setHeaderMode('')
        }
    }, [page])


    const renderPage = () => {
        switch (page) {
            case VET_HELP:
                return <VetHelp/>
            case HOTELS:
                return <Hotels/>
            case FOSTERING:
                return <Fostering/>
            case WALKING:
                return <Walking/>
            case LOST_PAGE:
                return <Lost page={page}/>
            case FOUND_PAGE:
                return <Found/>
            case HOME_PAGE:
                return <Home/>
            case FAVORITES:
                return <Favorites/>
            case USER_PAGE:
                return <EditUser/>
            case LOST_POST:
                return <Lost_Or_Found_Post page={true}/>
            case FOUND_POST:
                return <Lost_Or_Found_Post page={false}/>
            default:
                return <Home/>
        }
    }

    return (
        <div className='jumbotron'>
            <div className='container-fluid HEADER p-0 w-100 '>
                <Header headerMode={headerMode}/>
            </div>
            <div className='container col-8 '>
                <div className='row'>
                    <LeftBar page={page}/>
                    <div className='col-11 MAIN '>
                        {renderPage()}
                    </div>
                    <RightBar headerMode={headerMode}/>
                </div>
            </div>
        </div>
    );
};


export default Menu;
