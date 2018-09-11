import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
const API_KEY = 'AIzaSyB_QRokAvIBJXCjI0pG_XC1IxAEKbv3dZM';

YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data)
)
// Create a new component. This component should produce some HTML
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
};

//Take this component's generated HTML and put it on the page(IN the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));