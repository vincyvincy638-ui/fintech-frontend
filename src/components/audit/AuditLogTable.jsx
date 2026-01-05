import React, { useEffect, useState } from "react";
import { getAuditLogs } from "../../api/auditApi";

const AuditLogTable = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getAuditLogs()
      .then((res) => setLogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Audit Logs</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Method</th>
            <th>Parameters</th>
            <th>Return Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.methodName}</td>
              <td>{log.parameters}</td>
              <td>{log.returnValue}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogTable;
