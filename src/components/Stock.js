import React from "react";

// const entry = this.props.stock;
const Stock = ({ stock, tradeStock }) => (
  <div>
    <div className="card" onClick={() => tradeStock(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <div className="card-text">
          <div>
            {stock.ticker} : {stock.price}
          </div>
          <div>Sector: {stock.type} </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stock;
