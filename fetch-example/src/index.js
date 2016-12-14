import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      nav: [],
      home: []
    };
  }

  componentDidMount() {
    var myRequest = new Request('https://api.cosmicjs.com/v1/kelley-react-test/objects?read_key=WbK2aHDGGqgk70eSUwcCMsdikQMqL3stpWWkeMXZukOUohbReU');
    fetch(myRequest).then((response) => {
      return(response).json().then((json) => {
        var nav = json.objects[0].metafields;
        var home = json.objects[5];
        console.log(nav);
        console.log(home);
        this.setState({ nav, home });
      })
    })
}

  render() {
    return(
      <div>
        <ul>
        {this.state.nav.map(function(metafield, i) {
          return (
            <li key={i} className={metafield.key}><a href={metafield.value}>{metafield.title}</a></li>
            )
          })}
        </ul>
        <ul>
          <li dangerouslySetInnerHTML={{__html:this.state.home.content}}></li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);