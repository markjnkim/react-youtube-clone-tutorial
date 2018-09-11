import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyB_QRokAvIBJXCjI0pG_XC1IxAEKbv3dZM';


// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => { this.setState({ videos })
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
};

//Take this component's generated HTML and put it on the page(IN the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));