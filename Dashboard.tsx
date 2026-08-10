import React from 'react';

export default function Dashboard() {
  return (
    <div className="font-sans bg-[#f4f7f6] min-h-screen p-[15px]">
      {/* Header */}
      <header className="bg-[#1e3a8a] text-white p-[15px] rounded-[8px] flex justify-between items-center shadow-sm">
        <h2 className="m-0 text-[18px] font-bold">Kadir Bux Dental Lab & Clinic</h2>
        <span className="bg-[#22c55e] text-white px-[10px] py-[4px] rounded-[12px] text-[12px] font-medium">
          Active
        </span>
      </header>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[10px] mt-[15px]">
        <div className="bg-white p-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
          <p className="m-0 text-[#666] text-[12px] font-medium">Total Patients</p>
          <h3 className="mt-[5px] mb-0 text-[#1e3a8a] text-xl font-bold">0</h3>
        </div>
        <div className="bg-white p-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
          <p className="m-0 text-[#666] text-[12px] font-medium">Today Lab Jobs</p>
          <h3 className="mt-[5px] mb-0 text-[#1e3a8a] text-xl font-bold">0</h3>
        </div>
        <div className="bg-white p-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
          <p className="m-0 text-[#666] text-[12px] font-medium">Pending Payments</p>
          <h3 className="mt-[5px] mb-0 text-[#ef4444] text-xl font-bold">₹0</h3>
        </div>
      </div>

      {/* Action Menu / Shortcuts */}
      <div className="bg-white mt-[15px] p-[15px] rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
        <h3 className="mt-0 text-[15px] text-[#333] font-bold mb-[12px]">Quick Actions</h3>
        <div className="flex gap-[10px] flex-wrap">
          <button className="bg-[#2563eb] hover:bg-blue-700 text-white border-none py-[10px] px-[15px] rounded-[5px] cursor-pointer text-sm font-medium transition">
            + New Patient
          </button>
          <button className="bg-[#0f766e] hover:bg-teal-800 text-white border-none py-[10px] px-[15px] rounded-[5px] cursor-pointer text-sm font-medium transition">
            + Add Lab Order
          </button>
          <button className="bg-[#475569] hover:bg-slate-700 text-white border-none py-[10px] px-[15px] rounded-[5px] cursor-pointer text-sm font-medium transition">
            Create Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
