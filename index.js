import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import Title from './components/title';
import uuid from 'uuid';


ReactDOM.render(
	<Title />,
    <App />,
    document.getElementById('app')
);