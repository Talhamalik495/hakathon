import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcceptLoanList = () => {
  const [acceptedLoans, setAcceptedLoans] = useState([]);

  useEffect(() => {
    const fetchAcceptedLoans = async () => {
      try {
        const response = await axios.get('/api/accepted-loans'); // Replace with your API URL
        setAcceptedLoans(response.data);
      } catch (error) {
        console.error("Error fetching accepted loans:", error);
      }
    };
    fetchAcceptedLoans();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Accepted Loans</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {acceptedLoans.map((loan, index) => (
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

export default AcceptLoanList;
