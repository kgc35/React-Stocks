import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    selectedOption: "All",
  };

  handleRadio = (e) => {
    this.setState({ selectedOption: e.target.value });
    this.props.sortCallback(e.target.value);
  };

  handleChecked = (value) => {
    return this.state.selectedOption === value;
  };

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <form>
          <label>
            <input
              type="radio"
              value="All"
              checked={this.handleChecked("All")}
              onChange={(e) => this.handleRadio(e)}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="Alphabetically"
              checked={this.handleChecked("Alphabetically")}
              onChange={(e) => this.handleRadio(e)}
            />
            Alphabetically
          </label>
          <label>
            <input
              type="radio"
              value="Price"
              checked={this.handleChecked("Price")}
              onChange={(e) => this.handleRadio(e)}
            />
            Price
          </label>
        </form>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => this.props.filterCallback(e)}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;
