import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {
    GUEST_PAGE,
    logo_,
    pet_avatar,
    add_2,
    HOME_PAGE,
    LOST_PAGE,
    FOUND_PAGE, SERVICES, FAVORITES, USER_PAGE
} from "../../../utils/constants/constants";
import Favorites from "../../Favorites/components/Favorites";
import VetHelp from '../../Services/VetHelp/components/VetHelp'
import Lost from '../../Lost/components/Lost'
import Home from '../../Home/Home'
import EditUser from "../../EditUser/components/EditUser";
import Header from "../../Header/components/Header";
import LeftBar from "../../Left_Bar/components/LeftBar";
import RightBar from "../../RightBar/components/RightBar";


const Menu = (props) => {

    const [page, setPage] = useState(HOME_PAGE);

    const renderPage = () => {
        switch (page) {
            case SERVICES:
                return <VetHelp/>
            case LOST_PAGE:
                return <Lost/>
            case FOUND_PAGE:
                return <Lost/>
            case HOME_PAGE:
                return <Home/>
            case FAVORITES:
                return <Favorites/>
            case USER_PAGE:
                return <EditUser/>
            default:
                return <Home/>
        }
    }

    useEffect(() => {
        setPage(props.match.path.slice(1, props.match.path.length))
    }, [props.match.path])

    return (
        <div className='jumbotron '>
            <div className='container-fluid HEADER  w-100 '>
                <Header/>
            </div>
            <div className='container col-8 '>
                <div className='row '>
                    <LeftBar/>
                    <div className='col-8 MAIN '>
                        {renderPage()}
                    </div>
                    <RightBar/>
                </div>
            </div>
        </div>
    );
};


export default Menu;
