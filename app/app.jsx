import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory } from 'react-router'

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <p>Boilerplate 3</p>,
    document.getElementById('app') 
)