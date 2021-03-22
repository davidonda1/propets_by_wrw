import React from 'react';
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
import {
    BsFillHouseFill,
    GiMagnifyingGlass,
    MdPets,
    IoIosNotificationsOutline,
    AiOutlineStar,
    IoIosLogOut
} from "react-icons/all";
import Favorites from "../../Favorites/Favorites";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {change_page} from "../../../Redux/actions/pageActions";
import {connect} from "react-redux";
import VetHelp from "../../Services/VetHelp/components/VetHelp";
import Lost from "../../Lost/Lost";
import Found_Post from "../../Posts/Found_Post";
import Home from "../../Home/Home";
import Edit_User from "../../Profile/Edit_User";

const Menu = ({change_page, page}) => {

    const renderPage = () => {
        switch (page) {
            case SERVICES:
                return <VetHelp/>
            case LOST_PAGE:
                return <Lost/>
            case FOUND_PAGE:
                return <Found_Post/>
            case HOME_PAGE:
                return <Home/>
            case FAVORITES:
                return <Favorites/>
            case USER_PAGE:
                return <Edit_User/>
        }
    }

    return (
        <div className='jumbotron '>
            <div className='container-fluid HEADER  w-100 '>
                <div className='row'>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                    <button className='signin_btn  offset-5 col-1  justify-content-center  '>
                        <p className='signin_btn_text'>Sign in</p>
                    </button>
                </div>
            </div>
            <div className='container col-8 '>
                <div className='row '>
                    <nav className="navbar fixed-top mt-5  NAV col-2">
                        <ul className="navbar-nav ">
                            <li className="nav-item" onClick={() => change_page(HOME_PAGE)}>
                                <a className="nav-link" href="#"><BsFillHouseFill/>Home</a>
                            </li>
                            <li className="nav-item" onClick={() => change_page(LOST_PAGE)}>
                                <a className="nav-link" href="#"><GiMagnifyingGlass/>Lost</a>
                            </li>
                            <li className="nav-item" onClick={() => change_page(FOUND_PAGE)}>
                                <a className="nav-link" href="#"><MdPets/>Found</a>
                            </li>
                            <li className="nav-item" onClick={() => change_page(SERVICES)}>
                                <a className="nav-link" href="#"><IoIosNotificationsOutline/>Services</a>
                            </li>
                            <li className="nav-item" onClick={() => change_page(FAVORITES)}>
                                <a className="nav-link" href="#"><AiOutlineStar/>Favorites</a>
                            </li>
                            <li className="nav-item" onClick={() => change_page(USER_PAGE)}>
                                <a className="nav-link col-1 BTN" href="#"><img src={pet_avatar} alt={pet_avatar}/>Anna
                                    Smith</a>
                            </li>

                            <li onClick={() => change_page(HOME_PAGE)} className="nav-item">
                                <Link className="nav-link col-2 LOGOUT" to='/guest'><IoIosLogOut/>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='col-8 MAIN '>
                        {renderPage()}
                    </div>
                    <div className='col-2 offset-2 mt-5'><img src={add_2} alt='advertisement'/></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        page: state.pageReducer.page
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({change_page}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
