import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css_module/left_bar.css';
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";
import {Link} from "react-router-dom";
import {log_out} from '../../../../../Redux/actions/accountingActions';
import {
    FAVORITES, FOSTERING,
    FOUND_PAGE, GUEST_PAGE,
    HOME_PAGE, HOTELS,
    LOST_PAGE,
    USER_PAGE,
    VET_HELP, WALKING
} from "../../../../../utils/constants/constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FaDog, FaHotel, FaStethoscope, FaWalking} from "react-icons/all";

const LeftBar = ({log_out, nickName, user_avatar, page}) => {

    const [services, setServices] = useState(false);

    const active = 'left_bar_active';
    const none_active = '';

    const returnActive = argument => {
        return page === argument ? active : none_active
    }

    const returnServices = () => {
        if (services) {
            return (
                <>
                    <Link className={`mt-2 nav-link ${page === HOTELS ? active : none_active}`}
                          to={HOTELS}><span className='mr-2'><FaHotel/></span>Hotels</Link>

                    <Link className={`nav-link ${page === WALKING ? active : none_active}`}
                          to={WALKING}><span className='mr-2'><FaWalking/></span>Walking</Link>

                    <Link className={`nav-link ${returnActive(FOSTERING)}`}
                          to={FOSTERING}><span className='mr-2'><FaDog/></span>Fostering</Link>

                    <Link className={`mb-5 nav-link ${page === VET_HELP ? active : none_active}`}
                          to={VET_HELP}><span className='mr-2'><FaStethoscope/></span>Vet Help</Link>
                </>
            )
        }
    }

    return (
        <nav className="navbar flex-column_left_bar fixed-top mt-5 NAV col-2">
            <ul className=" navbar-nav mb-5">
                <li onClick={() => setServices(false)} className="nav-item">
                    <Link className={`nav-link ${returnActive(HOME_PAGE)}`}
                          to={HOME_PAGE}><span className='mr-2'><BsFillHouseFill/></span>Home</Link>
                </li>
                <li onClick={() => setServices(false)} className="nav-item">
                    <Link className={`nav-link ${returnActive(LOST_PAGE)}`}
                          to={LOST_PAGE}><span className='mr-2'><GiMagnifyingGlass/></span>Lost</Link>
                </li>
                <li onClick={() => setServices(false)} className="nav-item">
                    <Link className={`nav-link ${returnActive(FOUND_PAGE)}`}
                          to={FOUND_PAGE}><span className='mr-2'><MdPets/></span>Found</Link>
                </li>
                <li onClick={() => setServices(true)} className="nav-item">
                    <Link to={HOTELS}
                        // FIXME
                          className={`nav-link 
                        ${returnActive(VET_HELP)} 
                        ${returnActive(FOSTERING)}
                         ${returnActive(WALKING)}
                          ${returnActive(HOTELS)}`}><span
                        className='mr-2'><IoIosNotificationsOutline/></span>Services</Link>
                    {returnServices()}
                </li>
                <li onClick={() => setServices(false)} className="nav-item">
                    <Link className={`nav-link ${returnActive(FAVORITES)}`}
                          to={FAVORITES}><span className='mr-2'><AiOutlineStar/></span>Favorites</Link>
                </li>
                <li onClick={() => setServices(false)} className={`nav-item left_bar_border`}>
                    <Link className={`nav-link col-1`} to={USER_PAGE}>
                        <img src={user_avatar} alt={'avatar'}/>
                        <span className={`${returnActive(USER_PAGE)}`}>{nickName}</span>
                    </Link>
                </li>
                <li onClick={() => log_out()} className="nav-item">
                    <Link className="nav-link col-2 LOGOUT mt-5" to={GUEST_PAGE}><IoIosLogOut/>Logout</Link>
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