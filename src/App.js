import React from 'react'
import './App.css';
import Menu from "./Components/Menu/components/Menu";
import Guest from "./Components/Guest/components/Guest";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {FAVORITES, FOUND_PAGE, HOME_PAGE, LOST_PAGE, SERVICES, USER_PAGE} from "./utils/constants/constants";

function App() {
    return (
        <Switch>
            <Route exact
                   path={[`/${HOME_PAGE}`, `/${FOUND_PAGE}`, `/${LOST_PAGE}`, `/${SERVICES}`, `/${SERVICES}/:name`, `/${USER_PAGE}`, `/${FAVORITES}`]}
                   render={routeProps => <Menu {...routeProps}/>}/>
            <Route exact path={['/', '/guest']}><Guest/></Route>
            <Route><h1>Error. No such page...</h1></Route>
        </Switch>
    );
}

export default App;
