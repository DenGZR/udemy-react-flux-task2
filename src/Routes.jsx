var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photo = require('./components/Photo.jsx');

var Routes = (
    <Router>
        <Route path='/' component={Base}>
            <Route path='/news' component={News}/>
            <Route path='/photo' component={Photo}/>
        </Route>
    </Router>
);

module.exports = Routes;