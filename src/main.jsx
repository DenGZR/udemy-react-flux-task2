var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('./Routes.jsx');
var MainHeader = require('./components/Header.jsx');

ReactDOM.render(<MainHeader/>, document.getElementById('topHeader'));
ReactDOM.render(Router, document.getElementById('main'));




