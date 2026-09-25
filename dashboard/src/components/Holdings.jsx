import React, { useState, useEffect } from "react";
import axios from "axios";

import { holdings } from "../data/data";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // Fix: Extracting stock names properly for chart labels
  const labels = allHoldings.map((stock) => stock.name);

  // Fix: Configuring data structure expected by chart components (like Chart.js)
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(225, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  // Jab aap table ke 'Buy' button par click karenge
  const handleBuyClick = (stock) => {
    setSelectedStock(stock);
    setQty(stock.qty || 1);
    setPrice(stock.price || 0);
    setShowModal(true); // Popup open karne ke liye
  };

  // Cancel button ke liye
  const handleCancel = () => {
    setShowModal(false);
    setSelectedStock(null);
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = curValue - investment;
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Graph Component */}
      <h2>Graph Section</h2>

      <div className="chart-container">
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
