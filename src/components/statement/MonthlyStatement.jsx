import React from "react";
import { downloadMonthlyStatement } from "../../api/statementApi";

const MonthlyStatement = () => {
  const downloadPDF = () => {
    downloadMonthlyStatement(1, 2025).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Monthly_Statement.pdf");
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <div>
      <h2>Monthly Statement</h2>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default MonthlyStatement;
