import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <Avatar
          hash={this.props.tweet.gravatar}/>
        <div className="content">
          <NameWithHandle 
            author={this.props.tweet.author} />
          <Time 
            time={this.props.tweet.timestamp} />
          <Message 
            text={this.props.tweet.message}/>
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    );
  }
});

var testTweet = {
  message: "Something about cats.",
  gravatar: "9b28143c70dde90d33cf19e905a3b73d",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

var Avatar = React.createClass({
  render: function() {
    var hash = this.props.hash;
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return(
      <img
        src={url}
        className="avatar"
        alt="avatar" />
    );
  }
});

var Message = React.createClass({
  render: function() {
    return(
      <div className="message">
        {this.props.text}
      </div>    
    );
  }
});

var NameWithHandle = React.createClass({
  render: function() {
    var { name, handle } = 
    this.props.author;
    return(
      <span className="name-with-handle">
        <span className="name">
          {name}
        </span>
        <span className="handle">
          @{handle}
        </span>
      </span>
    );
  }
});

var Time = React.createClass({
  render: function() {
    return(
      <span className="time">
        {this.props.time}
      </span>
    );
  }
});

var ReplyButton = React.createClass({
  render: function() {
    return(
      <i className="fa fa-reply reply-button" />
    );
  }
});

var RetweetButton = React.createClass({
  render: function() {
    return(
      <i className="fa fa-retweet retweet-button" />
    );
  }
});

var LikeButton = React.createClass({
  render: function() {
    return(
      <i className="fa fa-heart like-button" />
    );
  }
});

var MoreOptionsButton = React.createClass({
  render: function() {
    return(
      <i className="fa fa-ellipsis-h more-options-button" />
    );
  }
});

ReactDOM.render(<Tweet tweet={testTweet}/>, 
  document.querySelector("#root"));