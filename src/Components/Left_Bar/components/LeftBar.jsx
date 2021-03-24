import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/left_bar.css'
import pet_avatar from '../../../utils/Images/petAvatar.png'
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";
import {Link} from "react-router-dom";
import {log_out} from '../../../Redux/actions/accountingActions';
import {
    FAVORITES,
    FOUND_PAGE,
    HOME_PAGE,
    LOST_PAGE,
    USER_PAGE,
    VET_HELP
} from "../../../utils/constants/constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const LeftBar = ({log_out, nickName, user_avatar}) => {

    return (
        <nav className="navbar fixed-top mt-5  NAV col-2">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link className="nav-link" to={`${HOME_PAGE}`}><BsFillHouseFill/>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`${LOST_PAGE}`}><GiMagnifyingGlass/>Lost</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`${FOUND_PAGE}`}><MdPets/>Found</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          to={`${VET_HELP}`}><IoIosNotificationsOutline/>Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`${FAVORITES}`}><AiOutlineStar/>Favorites</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link col-1 BTN" to={`${USER_PAGE}`}>
                        <img src={user_avatar} alt={'avatar'}/>{nickName}
                    </Link>
                </li>

                <li onClick={() => log_out()} className="nav-item">
                    <Link className="nav-link col-2 LOGOUT" to='/guest'><IoIosLogOut/>Logout</Link>
                </li>
            </ul>
        </nav>

    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({log_out}, dispatch)
}

const mapStateToProps = state => {
    return {
        nickName: state.accountingReducer.nickName,
        user_avatar: state.accountingReducer.user_avatar,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);