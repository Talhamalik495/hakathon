import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RejectLoanList = () => {
  const [rejectedLoans, setRejectedLoans] = useState([]);

  useEffect(() => {
    const fetchRejectedLoans = async () => {
      try {
        const response = await axios.get('/api/rejected-loans'); // Replace with your API URL
        setRejectedLoans(response.data);
      } catch (error) {
        console.error("Error fetching rejected loans:", error);
      }
    };
    fetchRejectedLoans();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Rejected Loans</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rejectedLoans.map((loan, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{loan.name}</td>
              <td className="border px-4 py-2">{loan.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RejectLoanList;
