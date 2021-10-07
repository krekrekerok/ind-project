import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, useLocation} from "react-router-dom"
import AdminContextProvider from './context/AdminContext';
import AuthContextProvider, { useAuth } from './context/AuthContext';
import { ADMIN_EMAIL } from './helpers/const';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const Routes = () => {
    return (
        <AuthContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/" component = {MainPage}/>
                        <Route exact path = "/admin" component = {AdminPage}/>
                        {/* <ProtectedRoute exact path = "/admin" component = {AdminPage}/> */}
                        <ProtectedRoute exact path = "/edit/:id" component = {EditPage}/>
                        <Route exact path = "/signin" component = {SignInPage}/>
                        <Route exact path = "/signup" component = {SignUpPage}/>
                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;

const ProtectedRoute = (props) => {
    const location = useLocation()
    const { currentUser } = useAuth()
    const {path} = props

    if (path === "/signin" ){
        return currentUser ? <Redirect to = {location.state?.form ?? "/"}/> :
        <Route {...props}/>
    } 
    return currentUser ?
        <Route {...props}/> : <Redirect to={{
            pathname: '/signin',
            state: {from: path}
        }}/>
    // return currentUser ? 
    //         currentUser.email === ADMIN_EMAIL ?
    //             <Route {...props}/> : 
    //             <Redirect to={{ pathname: '/', state: {from: path}}}/> : 
    //             <Redirect to={{ pathname: '/signin',  state: {from: path}}}/>
    
}