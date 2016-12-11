import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Envelope = React.createClass({
    render: function() {
        return(
            <div className="envelope">
                <AddressLabel person="toPerson"></AddressLabel> 
                <AddressLabel person="fromPerson"></AddressLabel>
            </div>
        );
    }
});

var AddressLabel = React.createClass({
    render: function() {
        return(
            <div className="label">yo</div>
        );
    }
});

var person = {
    fullName: "Todd Perry",
    addressLine1: "1234 main st",
    addressLine2: "Salinas, CA 93901"
}


ReactDOM.render(<Envelope toPerson={person} fromPerson={person} />,document.querySelector("#root"));