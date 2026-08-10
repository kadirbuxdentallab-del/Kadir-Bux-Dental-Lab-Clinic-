import React, { useState } from 'react';

export default function LabOrderForm() {
  const [order, setOrder] = useState({
    patientName: '',
    doctorName: '',
    workType: 'Zirconia Crown',
    toothNumber: '',
    shade: '',
    deliveryDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Lab order for ${order.patientName} saved successfully!`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md my-6 border border-slate-200">
      <h2 className="text-xl font-bold text-teal-900 mb-4 border-b pb-2">
        New Dental Lab Order
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Patient Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md mt-1"
            value={order.patientName}
            onChange={(e) => setOrder({ ...order, patientName: e.target.value })}
            placeholder="e.g. Rahul Sharma"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Doctor / Clinic Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              value={order.doctorName}
              onChange={(e) => setOrder({ ...order, doctorName: e.target.value })}
              placeholder="Dr. Kasim"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Work Type</label>
            <select
              className="w-full p-2 border rounded-md mt-1 bg-white"
              value={order.workType}
              onChange={(e) => setOrder({ ...order, workType: e.target.value })}
            >
              <option value="Zirconia Crown">Zirconia Crown</option>
              <option value="PFM Crown">PFM Crown</option>
              <option value="Denture">Denture</option>
              <option value="Aligner / Nightguard">Aligner / Nightguard</option>
              <option value="Implant Prosthesis">Implant Prosthesis</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Tooth Number(s)</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              value={order.toothNumber}
              onChange={(e) => setOrder({ ...order, toothNumber: e.target.value })}
              placeholder="e.g. #11, #12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Shade (Vita)</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              value={order.shade}
              onChange={(e) => setOrder({ ...order, shade: e.target.value })}
              placeholder="e.g. A2 / A3"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Expected Delivery Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md mt-1"
            value={order.deliveryDate}
            onChange={(e) => setOrder({ ...order, deliveryDate: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 rounded-md transition mt-4"
        >
          Save Lab Order
        </button>
      </form>
    </div>
  );
}
