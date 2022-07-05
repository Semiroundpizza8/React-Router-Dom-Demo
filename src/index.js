import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Cats from './Cats';
import Dogs from './Dogs';

const App = () => {
    return (
    <div>
        <h1>React Router Demo!!</h1>
        <div 
            id="nav"
            style = {{
                display: 'flex',
                gap: '20px'
            }}
        >
            <Link to="/cats">Cats</Link>
            <a href='http://localhost:3000/cats'>A Tag Cats</a>
            <Link to="/dogs/300">Dogs</Link>
        </div>
    <br />
        <Switch>
            <Route path='/cats'>
                <Cats />
            </Route>
            <Route path='/dogs/adopt'>
                <p>ADOPT FORM GOES HERE</p>
            </Route>
            <Route component={Dogs} path='/dogs/:pictureDimensions' />
        </Switch>

    </div>
    )
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.querySelector('#app')
)