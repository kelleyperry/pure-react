import React from 'react';
import ReactDOM from 'react-dom';

var Greeting = React.createClass({
  render: function() {
    var username = "Bob";
    return (
        <div>{username === undefined || username === null ? "Not Logged In" : "Hello " + username}!</div>
      );
    }
});

ReactDOM.render(
  <Greeting />,
  document.querySelector("#root"));