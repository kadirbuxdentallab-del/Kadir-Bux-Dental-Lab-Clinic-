import React, { useState } from 'react';

export default function PatientForm() {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    phone: '',
    treatment: '',
    toothNumber: '',
    totalAmount: '',
    paidAmount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Patient ${patient.name} successfully registered!`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md my-6 border border-slate-200">
      <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">
        New Patient Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Patient Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
            value={patient.name}
            onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Age</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.age}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
              placeholder="e.g. 35"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.phone}
              onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
              placeholder="9876543210"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Treatment / Procedure</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.treatment}
              onChange={(e) => setPatient({ ...patient, treatment: e.target.value })}
              placeholder="e.g. Root Canal / Zirconia Crown"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Tooth No. / Shade</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.toothNumber}
              onChange={(e) => setPatient({ ...patient, toothNumber: e.target.value })}
              placeholder="e.g. #11 (A2 Shade)"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Total Fees (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.totalAmount}
              onChange={(e) => setPatient({ ...patient, totalAmount: e.target.value })}
              placeholder="5000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Advance Paid (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              value={patient.paidAmount}
              onChange={(e) => setPatient({ ...patient, paidAmount: e.target.value })}
              placeholder="2000"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition mt-4"
        >
          Save Patient Entry
        </button>
      </form>
    </div>
  );
}
