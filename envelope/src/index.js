import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let toPerson = {
    fullName: 'Todd Perry',
    addressLine1: '1234 main st',
    addressLine2: 'Salinas, CA 93901',
};

let fromPerson = {
    fullName: 'Kelley Perry',
    addressLine1: '1234 main st',
    addressLine2: 'Salinas, CA 93901',
};

let Envelope = React.createClass({
    render: function() {
        return(
            <div className="envelope">
                <AddressLabel className="from" person={fromPerson} />
                <Stamp />
                <AddressLabel className="to" person={toPerson} />
            </div>
        );
    }
});

let Stamp = React.createClass({
    render: function() {
        return(
            <div className="stamp">
              <img role="presentation" src="http://placehold.it/80x100?text=Stamp" />
            </div>
        );
    }
});

let AddressLabel = React.createClass({
    render: function() {
        var {person} = this.props;
        return(
            <div className={this.props.className + " label"}>
                <div>{person.fullName}</div>
                <div>{person.addressLine1}</div>
                <div>{person.addressLine2}</div>
            </div>
        );
    }
});

ReactDOM.render(<Envelope />,document.querySelector("#root"));
