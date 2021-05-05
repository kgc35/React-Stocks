import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    filteredStocks: [],
    portfolioStocks: [],
    sortCondition: "All",
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((stocks) =>
        this.setState({ stocks: stocks, filteredStocks: stocks })
      );
    //how does this work? ; it sets the array to the key if it is the same name
  }

  buyStock = (obj) => {
    let existing = this.state.portfolioStocks.find(
      (stock) => stock.id === obj.id
    );
    // let existing = this.state.portfolioStocks.includes(obj);
    existing //check for duplicates by ID before adding to portfolio
      ? alert("Already own stock")
      : this.setState({
          portfolioStocks: [...this.state.portfolioStocks, obj],
        });
  };

  sellStock = (obj) => {
    let filteredArray = this.state.portfolioStocks.filter(
      (stock) => stock.id !== obj.id
    );
    //filter out the stock you want to sell.

    this.setState({ portfolioStocks: filteredArray });
  };

  sortCallback = (value) => {
    let newArray = [];
    if (value === "Alphabetically") {
      newArray = [...this.state.filteredStocks].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.setState({ filteredStocks: newArray });
    } else if (value === "Price") {
      newArray = [...this.state.filteredStocks].sort(
        (a, b) => a.price - b.price
      );
    } else {
      newArray = [...this.state.stocks];
    }
    this.setState({ filteredStocks: newArray, sortCondition: value });
  };

  filterCallback = (e) => {
    let newArray = [];
    if (e.target.value === "Tech") {
      newArray = this.state.stocks.filter((stock) => stock.type === "Tech");
    } else if (e.target.value === "Sportswear") {
      newArray = this.state.stocks.filter(
        (stock) => stock.type === "Sportswear"
      );
    } else if (e.target.value === "Finance") {
      newArray = this.state.stocks.filter((stock) => stock.type === "Finance");
    } else {
      newArray = this.state.stocks;
    }

    this.setState({ filteredStocks: newArray });
  };

  render() {
    // console.log(this.state.filteredStocks);

    return (
      <div>
        <SearchBar
          sortCallback={this.sortCallback}
          filterCallback={this.filterCallback}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.filteredStocks}
              tradeStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.portfolioStocks}
              tradeStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
