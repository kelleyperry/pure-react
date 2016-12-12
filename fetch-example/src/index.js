import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//https://api.cosmicjs.com/v1/kelley-react-test/object/social?pretty=true&read_key=WbK2aHDGGqgk70eSUwcCMsdikQMqL3stpWWkeMXZukOUohbReU

class App extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      metafields: []
    };
  }

  componentDidMount() {
    var myRequest = new Request('https://api.cosmicjs.com/v1/kelley-react-test/object/social?pretty=true&read_key=WbK2aHDGGqgk70eSUwcCMsdikQMqL3stpWWkeMXZukOUohbReU');
    
    fetch(myRequest).then((response) => {
      return(response).json().then((json) => {
        console.log(json.object.metafields);
        var metafields = json.object.metafields;
        console.log(metafields);
        this.setState({ metafields });
      })
    })
}

  render() {
    return(
      <div>{this.state.metafields}</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
