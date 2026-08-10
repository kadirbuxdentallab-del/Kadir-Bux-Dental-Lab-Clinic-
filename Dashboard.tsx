import React, { useState } from 'react';
import { 
  UserPlus, Users, Calendar, Activity, FileText, 
  Pill, CreditCard, BarChart2, Database, Settings, 
  Home, Globe, LogOut, Sparkles 
} from 'lucide-react';

export default function Dashboard() {
  const [lang, setLang] = useState('English');

  const actionButtons = [
    { title: 'New Patient', icon: UserPlus },
    { title: 'Patient List', icon: Users },
    { title: 'Daily Folders', icon: Calendar },
    { title: 'Dental Chart', icon: Activity },
    { title: 'Prescription', icon: FileText },
    { title: 'Medicines', icon: Pill },
    { title: 'Billing', icon: CreditCard },
    { title: 'Reports', icon: BarChart2 },
    { title: 'Backup', icon: Database },
    { title: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Patients', value: '495' },
    { label: "Today's Patients", value: '3' },
    { label: "Today's Collection", value: '₹2,950' },
    { label: 'Pending Amount', value: '₹24,735' },
    { label: 'Monthly Income', value: '₹6,720' },
    { label: 'Total Collection', value: '₹2,78,890' },
    { label: 'Lab Cases Pending', value: '0' },
    { label: 'Completed Cases', value: '0' },
    { label: 'Appointments Today', value: '0' },
    { label: 'Low Stock', value: '0' },
  ];

  const todayPatients = [
    { id: 1, name: 'Nisha', phone: '8077245094', age: 30, amount: '₹600', balance: '₹150' },
    { id: 2, name: 'Shah Jahan', phone: '9897588692', age: 35, amount: '₹2,000', balance: '' },
    { id: 3, name: 'Muskan', phone: '7820050319', age: 39, amount: '₹350', balance: '' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <header className="bg-white border-b px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-lg">
            K
          </div>
          <div>
            <h1 className="font-bold text-pink-600 text-sm leading-tight">Kadir Baksh</h1>
            <p className="text-xs text-gray-500">Dental Lab</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button className="bg-pink-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
            <Home size={14} /> Home
          </button>
          <button className="text-gray-600 px-3 py-1.5 flex items-center gap-1">
            <Users size={14} /> Patients
          </button>
          <button className="text-gray-600 px-2 py-1.5">+ New</button>
          <button className="text-gray-600 p-1.5"><Settings size={16} /></button>
          <button className="border px-2 py-1 rounded text-purple-600 flex items-center gap-1">
            <Globe size={14} /> Urdu
          </button>
          <button className="text-gray-500 p-1.5"><LogOut size={16} /></button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Banner Section */}
        <div className="text-center py-4">
          <div className="text-3xl font-extrabold text-red-600 tracking-wider mb-1">
            KADIR <span className="text-red-700">Bux</span>
          </div>
          <div className="text-lg font-bold text-red-600 mb-1">
            कदीर बख्श डेंटल लैब
          </div>
          <div className="text-sm font-semibold text-red-700">
            قدیر بخش ڈینٹل لیب
          </div>

          <p className="text-xs text-gray-400 mt-3">Welcome 👋</p>
          <h2 className="text-xl font-bold text-purple-600">Patient Care, Your Priority</h2>
          <p className="text-xs text-gray-400">Patient Care, Your Priority</p>
          
          <div className="inline-flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded-full mt-2">
            <Sparkles size={12} /> AI assistant ready ✨
          </div>

          {/* Language Switcher */}
          <div className="flex justify-center gap-2 mt-4">
            {['English', 'हिन्दी', 'اردو'].map((item) => (
              <button 
                key={item}
                onClick={() => setLang(item)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  lang === item ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-5 gap-3">
          {actionButtons.map((btn, index) => {
            const Icon = btn.icon;
            return (
              <button 
                key={index} 
                className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                  <Icon size={20} />
                </div>
                <span className="text-[11px] font-medium text-pink-500 text-center">{btn.title}</span>
              </button>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-[10px] text-gray-400 font-medium mb-1">{stat.label}</p>
              <p className="text-base font-bold text-slate-700">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Today's Patients List */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-purple-600 mb-3 flex items-center gap-2">
            <span>📊</span> Today's Patients ({todayPatients.length})
          </h3>

          <div className="space-y-2">
            {todayPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between border-b border-gray-100 pb-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                    {patient.id}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-800">{patient.name}</p>
                    <p className="text-[10px] text-gray-400">{patient.phone} • {patient.age}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-emerald-500">{patient.amount}</p>
                  {patient.balance && (
                    <p className="text-[10px] text-red-500">बाकी {patient.balance}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
