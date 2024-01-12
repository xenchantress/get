// src/components/Transactions.js
import React from 'react';

const Transaction = ({ type, amount, date }) => {
  const transactionColor = type === 'deposit' ? 'text-green-500' : 'text-red-500';
  const transactionIcon = type === 'deposit' ? '💰' : '💸';

  return (
    <div className={`flex justify-between items-center p-3 border ${transactionColor}`}>
      <span>{transactionIcon}</span>
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      <span>{amount}</span>
      <span>{date}</span>
    </div>
  );
};

const Transactions = () => {
  // Assuming you have a list of transactions, modify as needed
  const transactions = [
    { type: 'deposit', amount: 100, date: '2022-01-15' },
    { type: 'withdraw', amount: -50, date: '2022-01-16' },
    { type: 'transfer', amount: -30, date: '2022-01-17' },
    // Add more transactions as needed
  ];

  return (
    <div className="container mt-5">
      <h1>My Transactions</h1>
      <div className="flex flex-col">
        {transactions.map((transaction, index) => (
          <Transaction key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
