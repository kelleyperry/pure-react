import React from 'react';
import ReactDOM from 'react-dom';

var HellowWorld = React.createClass({
	render: function() {
			return ( 
				<div className="dog"><Hello/> <World/>!</div> 
				);
			}
	});

	var Hello = React.createClass({
		render: function() {
			return(
				<span>Hello</span>
			);
		}
	});

	var World = React.createClass({
		render: function() {
			return(
				<span>World</span>
			);
		}
	});

ReactDOM.render(
	<HellowWorld/>,
	document.querySelector('#root'));