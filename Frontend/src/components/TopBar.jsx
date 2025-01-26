import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Admin Dashboard</h1>
      <button className="bg-red-600 px-4 py-2 rounded text-white">Logout</button>
    </div>
  );
};

export default Topbar;
