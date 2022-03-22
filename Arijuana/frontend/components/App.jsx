import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import SplashContainer from './splash/splash_container';

const App = () => {
    return (
        <div>
            <h1 id='app-name'>Arijuana</h1>
            <Switch>
                <Route path='/' component={SplashContainer}/>
                <Route path='/signup' component={SignupContainer}/>
                <Route path='/login' component={LoginContainer}/>
            </Switch>
        </div>
    )
};

export default App;