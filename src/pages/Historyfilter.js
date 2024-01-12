// src/components/HistoryFilter.js
import React, { useState } from 'react';

const HistoryFilter = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleFilter = () => {
    // Assuming you want to pass the filter options to the parent component
    onFilter({ fromDate, toDate });
  };

  return (
    <div className="mb-4">
      <h2>Filter by Date Range</h2>
      <div className="flex items-center space-x-4">
        <label>From Date:</label>
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

        <label>To Date:</label>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

        <button onClick={handleFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default HistoryFilter;
