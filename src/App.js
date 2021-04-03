import React, {useEffect} from 'react';
import Menu from "./Components/Menu/components/Menu";
import Guest from "./Components/Guest/components/Guest";
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import {
    FAVORITES,
    FOSTERING,
    FOUND_PAGE, FOUND_POST,
    HOME_PAGE,
    HOTELS,
    LOST_PAGE, LOST_POST,
    USER_PAGE,
    VET_HELP,
    WALKING,
} from "./utils/constants/constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginUser} from './Redux/actions/accountingActions'
import './App.css';

function App({loginUser, token}) {


    let history = useHistory();


    useEffect(() => {
        if (localStorage.getItem('token') && !token) {
            loginUser(localStorage.getItem('token'));
        }
    }, [])

    useEffect(() => {
        if (token) {
            history.push(HOME_PAGE);
        }
    }, [token])

    const returnStatement = (argument) => {
        return (
            <>
                <Menu page={argument}/>
            </>
        )
    }

    return (
        <Switch>
            <Route exact path={`/${HOME_PAGE}`}>{() => token ? returnStatement(HOME_PAGE) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FOUND_PAGE}`}>{() => token ? returnStatement(FOUND_PAGE) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${LOST_PAGE}`}>{() => token ? returnStatement(LOST_PAGE) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${VET_HELP}`}>{() => token ? returnStatement(VET_HELP) : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${HOTELS}`}>{() => token ? returnStatement(HOTELS) : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FOSTERING}`}>{() => token ? returnStatement(FOSTERING) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${WALKING}`}>{() => token ? returnStatement(WALKING) : <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${USER_PAGE}`}>{() => token ? returnStatement(USER_PAGE) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FAVORITES}`}>{() => token ? returnStatement(FAVORITES) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${LOST_POST}`}>{() => token ? returnStatement(LOST_POST) :
                <Redirect to={'/'}/>}</Route>
            <Route exact path={`/${FOUND_POST}`}>{() => token ? returnStatement(FOUND_POST) :
                <Redirect to={'/'}/>}</Route>
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
