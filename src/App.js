import React, {useEffect} from 'react'
import './App.css';
import Menu from "./Components/Menu/components/Menu";
import Guest from "./Components/Guest/components/Guest";
import {Switch, Route, useHistory} from 'react-router-dom'
import {
    FAVORITES, FOSTERING,
    FOUND_PAGE,
    HOME_PAGE,
    HOTELS,
    LOST_PAGE,
    USER_PAGE,
    VET_HELP, WALKING
} from "./utils/constants/constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginUser} from './Redux/actions/accountingActions'
import {accountingReducer} from "./Redux/reducers/accountingReducer";


function App({loginUser, token}) {

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
            <Route exact path={`/${HOME_PAGE}`}><Menu page={HOME_PAGE}/></Route>
            <Route exact path={`/${FOUND_PAGE}`}><Menu page={FOUND_PAGE}/></Route>
            <Route exact path={`/${LOST_PAGE}`}><Menu page={LOST_PAGE}/></Route>
            <Route exact path={`/${VET_HELP}`}><Menu page={VET_HELP}/></Route>
            <Route exact path={`/${HOTELS}`}><Menu page={HOTELS}/></Route>
            <Route exact path={`/${FOSTERING}`}><Menu page={FOSTERING}/></Route>
            <Route exact path={`/${WALKING}`}><Menu page={WALKING}/></Route>
            <Route exact path={`/${USER_PAGE}`}><Menu page={USER_PAGE}/></Route>
            <Route exact path={`/${FAVORITES}`}><Menu page={FAVORITES}/></Route>
            <Route exact path={['/', '/guest']}><Guest/></Route>
            <Route><h1>Error. No such page...</h1></Route>
        </Switch>

        // <Switch>
        //     {token ? <Route exact path={`/${HOME_PAGE}`}><Menu page={HOME_PAGE}/></Route>
        //         : <Route exact path={['/', '/guest']}><Guest/></Route>}
        // </Switch>
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
