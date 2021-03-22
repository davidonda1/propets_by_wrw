import React     from 'react'
import './App.css';
import Menu from "./Components/Menu/components/Menu";
import Guest from "./Components/Guest/components/Guest";
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route exact path={'/home'}><Menu/></Route>
            <Route exact path={['/', '/guest']}><Guest/></Route>
            <Route><h1>Error. No such page...</h1></Route>
        </Switch>
    );
}

export default App;
