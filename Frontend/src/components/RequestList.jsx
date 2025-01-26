import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://your-api-url.com/requests'); // Backend API URL
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Requests List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">CNIC</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{request.name}</td>
              <td className="border px-4 py-2">{request.cnic}</td>
              <td className="border px-4 py-2">{request.contact}</td>
              <td className="border px-4 py-2">{request.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
