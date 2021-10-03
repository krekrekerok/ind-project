import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom"
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {MainPage}/>
                <Route exact path = "/admin" component = {AdminPage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;