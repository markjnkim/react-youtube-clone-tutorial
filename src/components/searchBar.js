import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
    

  handleInputChange = event => {
    console.log(event.target.value);

  }

  render() {
    return (
      <div>
        <input
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;