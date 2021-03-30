import React, {useEffect} from 'react';
import Menu from "./Components/Menu/components/Menu";
import Guest from "./Components/Guest/components/Guest";
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import {
    FAVORITES,
    FOSTERING,
    FOUND_PAGE,
    HOME_PAGE,
    HOTELS,
    LOST_PAGE,
    USER_PAGE,
    VET_HELP,
    WALKING,
} from "./utils/constants/constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginUser, userInfo} from './Redux/actions/accountingActions'
import {newLostPet} from "./Redux/actions/lostFoundActions";
import './App.css';

function App({loginUser, token}) {
   newLostPet();
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            loginUser(localStorage.getItem('token'));
        }
    }, [])

    useEffect(() => {
        if (token) {
            history.push(HOME_PAGE)
        }
    }, [token])

    return (
        <Switch>
            <Route exact path={`/${HOME_PAGE}`}>{token ? <Menu page={HOME_PAGE}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FOUND_PAGE}`}>{token ? <Menu page={FOUND_PAGE}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${LOST_PAGE}`}>{token ? <Menu page={LOST_PAGE}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${VET_HELP}`}>{token ? <Menu page={VET_HELP}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${HOTELS}`}>{token ? <Menu page={HOTELS}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FOSTERING}`}>{token ? <Menu page={FOSTERING}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${WALKING}`}>{token ? <Menu page={WALKING}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${USER_PAGE}`}>{token ? <Menu page={USER_PAGE}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FAVORITES}`}>{token ? <Menu page={FAVORITES}/> : <Redirect to={'/'}/>}</Route>
            <Route exact path={['/', '/guest']}><Guest/></Route>
            <Route><h1>Error. No such page...</h1></Route>
        </Switch>
    );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loginUser}, dispatch);
}
const mapStateToProps = state => {
    return {
        token: state.accountingReducer.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
