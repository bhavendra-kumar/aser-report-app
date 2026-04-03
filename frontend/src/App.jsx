import { useState } from "react";
import { data } from "./data";

function getPriority(score) {
  if (score < 40) return { text: "High", color: "#ef4444" };
  if (score < 55) return { text: "Medium", color: "#f59e0b" };
  return { text: "Low", color: "#22c55e" };
}

export default function App() {
  const [selectedState, setSelectedState] = useState("All");

  const states = ["All", ...new Set(data.map((d) => d.state))];

  const filteredData =
    selectedState === "All"
      ? data
      : data.filter((d) => d.state === selectedState);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 EduTrack AI Dashboard</h1>

      {/* Filter */}
      <div style={styles.filterContainer}>
        <label style={styles.label}>Filter by State:</label>
        <select
          style={styles.select}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>State</th>
            <th>Grade</th>
            <th>Score</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => {
            const priority = getPriority(item.score);

            return (
              <tr key={index} style={styles.row}>
                <td>{item.state}</td>
                <td>{item.grade}</td>
                <td>{item.score}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: priority.color,
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    {priority.text}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filterContainer: {
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
  },
  select: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  row: {
  textAlign: "center",
  borderBottom: "1px solid #eee",
  transition: "0.2s",
},
};