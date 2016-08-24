var React = require('react');
var ReactDOM = require('react-dom');
var App = require('../app/components/App');
var jquery= require('jquery');
var Routes = require('./Routes');
require("../app/style.css");
require('bootstrap/dist/css/bootstrap.css');


ReactDOM.render(Routes , document.getElementById('app'));
