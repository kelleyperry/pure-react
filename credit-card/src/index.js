import React from 'react';
import ReactDOM from 'react-dom';

var cardInfo = {
  bankname: "Bank of America",
  ccnumber: 1234567887654321,
  ccv: 1234,
  validthru: "2016-07-30 21:24:37",
  cardholder: "Kelley Perry"
};

var CreditCard = React.createClass({
  render: function() {
    return (
      <div className='credit-card'>
        <div>{cardInfo.bankname}</div>
        <CCNumber />
        <div>{cardInfo.ccv}</div>
        <EXPDate />
        <div>{cardInfo.cardholder}</div>
      </div>
    );
  }
});

var CCNumber = React.createClass({
  render: function() {
    return(
      <div></div>
    );
  }
});

var EXPDate = React.createClass({
  render: function() {
    return(
      <div></div>
    );
  }
});

ReactDOM.render(
  <CreditCard cardInfo={cardInfo} />,
  document.querySelector("#root")
);
