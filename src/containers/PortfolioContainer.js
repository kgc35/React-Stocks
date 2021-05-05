import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map((entry) => (
          <Stock
            stock={entry}
            key={entry.id}
            tradeStock={this.props.tradeStock}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
