import React, { Component } from "react";

class SearchBar extends Component {
  constructor (){
    super();

    this.state = {
      term: '',
    };
  }
  
  //callback method
  onInputChange = event => {
    this.setState({ term: event.target.value})
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
    //TOOD: call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h1>Food in YouTube 🥘</h1>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
