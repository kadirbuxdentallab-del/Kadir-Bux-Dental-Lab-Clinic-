import React, { useState } from 'react';

export default function InvoiceForm() {
  const [invoice, setInvoice] = useState({
    patientName: '',
    phone: '',
    service: '',
    totalAmount: '',
    discount: '0',
    paidAmount: '',
  });

  const grandTotal = Number(invoice.totalAmount) - Number(invoice.discount);
  const dueAmount = grandTotal - Number(invoice.paidAmount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Invoice generated for ${invoice.patientName}! Due: ₹${dueAmount}`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md my-6 border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
        Create Patient Billing Invoice
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Patient Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md mt-1"
            value={invoice.patientName}
            onChange={(e) => setInvoice({ ...invoice, patientName: e.target.value })}
            placeholder="e.g. Rahul Sharma"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Treatment Details</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            value={invoice.service}
            onChange={(e) => setInvoice({ ...invoice, service: e.target.value })}
            placeholder="Root Canal Treatment + Zirconia Crown"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700">Total Charges (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={invoice.totalAmount}
              onChange={(e) => setInvoice({ ...invoice, totalAmount: e.target.value })}
              placeholder="5000"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700">Discount (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={invoice.discount}
              onChange={(e) => setInvoice({ ...invoice, discount: e.target.value })}
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700">Paid Amount (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={invoice.paidAmount}
              onChange={(e) => setInvoice({ ...invoice, paidAmount: e.target.value })}
              placeholder="3000"
            />
          </div>
        </div>

        {/* Calculation Summary */}
        <div className="bg-slate-50 p-3 rounded-md text-sm border space-y-1">
          <div className="flex justify-between">
            <span>Grand Total:</span>
            <span className="font-bold">₹{grandTotal > 0 ? grandTotal : 0}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Remaining Balance / Due:</span>
            <span className="font-bold">₹{dueAmount > 0 ? dueAmount : 0}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 rounded-md transition mt-4"
        >
          Generate & Print Invoice
        </button>
      </form>
    </div>
  );
}
