import React, { useEffect, useState } from "react";
import { getPortfolio } from "../services/portfolioService";
import PortfolioChart from "./PortfolioChart";

const PortfolioDashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [latency, setLatency] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const startTime = Date.now(); // latency check start
        const res = await getPortfolio();
        const endTime = Date.now();
        setPortfolio(res.data);
        setLatency(endTime - startTime); // calculate round-trip latency
      } catch (err) {
        console.error(err);
        setError("Backend not reachable");
      }
    }

    loadPortfolio();
  }, []);

  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (!portfolio) return <h2>Loading Portfolio...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Portfolio Dashboard</h1>
      <h3>Total Value: ₹{portfolio.totalValue}</h3>
      <h4>Latency: {latency} ms</h4>

      {/* PortfolioChart will show both Bar & Pie charts */}
      <PortfolioChart stocks={portfolio.stocks} />
    </div>
  );
};

export default PortfolioDashboard;
