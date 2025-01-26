import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="mt-6">
        <li>
          <Link to="/loans" className="text-lg hover:bg-gray-700 p-2 block rounded">
            Loans
          </Link>
        </li>
        <li>
          <Link to="/accept-loans" className="text-lg hover:bg-gray-700 p-2 block rounded">
            Accept Loan
          </Link>
        </li>
        <li>
          <Link to="/reject-loans" className="text-lg hover:bg-gray-700 p-2 block rounded">
            Reject Loan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
