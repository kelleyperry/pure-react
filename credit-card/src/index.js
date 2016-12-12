import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import "./index.css";

var cardInfo = {
  bankname: "Bank of America",
  ccnumber: 1534561228876513,
  ccv: 1234,
  validthru: "2018-07-30 21:24:37",
  cardholder: "Kelley Perry"
};

var CreditCard = React.createClass({
  render: function() {
    return (
      <div className='credit-card'>
        <div className="bank-name">{cardInfo.bankname}</div>
        <CCNumber className="card-number" ccnumber={cardInfo.ccnumber} />
        <div className="ccv-number">{cardInfo.ccv}</div>
        <EXPDate className="expiration-date" validthru={cardInfo.validthru} />
        <div className="card-holder">{cardInfo.cardholder}</div>
      </div>
    );
  }
});

var CCNumber = React.createClass({
  divideAddSpace: function() {
    var num = this.props.ccnumber;
    var str = num.toString();
    var regex = /(.{4})(?!$)/g;
    var subst = '$1 ';
    var result = str.replace(regex, subst);
    return result;
  },
  render: function() {
    return(
      <div className={this.props.className}>{this.divideAddSpace()}</div>
    );
  }
});

var EXPDate = React.createClass({
  computeMonthYear: function() {
    return moment(this.props.validthru).format("MM/YY");
  },
  render: function() {
    return(
      <div className={this.props.className}><span>valid<br />thru</span>{this.computeMonthYear()}</div>
    );
  }
});

ReactDOM.render(
  <CreditCard cardInfo={cardInfo} />,
  document.querySelector("#root")
);
