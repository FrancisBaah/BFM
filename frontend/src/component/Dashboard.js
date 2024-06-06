import React from "react";

const Dashboard = () => {
  return (
    <div className="md:p-24">
      <div className="flex gap-4 w-full justify-between">
        <div className="w-[200px] text-white rounded h-[100px] bg-slate-500 justify-center items-center flex flex-col">
          <h1>Deposit</h1>
          <p>123</p>
          <p>icon</p>
        </div>
        <div className="w-[200px] text-white rounded h-[100px] bg-red-500 justify-center items-center flex flex-col">
          <h1>Deposit</h1>
          <p>123</p>
          <p>icon</p>
        </div>
        <div className="w-[200px] text-white rounded h-[100px] bg-yellow-500 justify-center items-center flex flex-col">
          <h1>Deposit</h1>
          <p>123</p>
          <p>icon</p>
        </div>
        <div className="w-[200px] text-white rounded h-[100px] bg-blue-500 justify-center items-center flex flex-col">
          <h1>Deposit</h1>
          <p>123</p>
          <p>icon</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
