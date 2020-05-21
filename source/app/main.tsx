// Core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


// Views
import Home from './views/home.component';


export default ReactDOM.render.bind(undefined, (
    <BrowserRouter>
        <Switch>
            <Route component={Home}/>
        </Switch>
    </BrowserRouter>
));
