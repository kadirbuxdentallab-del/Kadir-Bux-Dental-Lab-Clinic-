
import React, { useState } from 'react';

// Aapke saare components ka import
import Dashboard from './Dashboard';
import PatientForm from './PatientForm';
import PatientProfile from './Patient profile';
import InvoiceForm from './InvoiceForm';
import LabOrderForm from './LabOrderForm';

export default function App() {
  // Current Active Screen Ko Manage Karne Ke Liye State
  const [activeTab, setActiveTab] = useState<'home' | 'patients' | 'add' | 'reports' | 'settings'>('home');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>('KBD-M5927FG6-8FP');

  // Page Switcher Function
  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard onSelectPatient={(id) => { setSelectedPatientId(id); setActiveTab('patients'); }} />;
      case 'patients':
        return <PatientProfile patientId={selectedPatientId} onBack={() => setActiveTab('home')} />;
      case 'add':
        return <PatientForm onSuccess={() => setActiveTab('home')} />;
      case 'reports':
        return <InvoiceForm />;
      case 'settings':
        return <LabOrderForm />;
      default:
        return <Dashboard onSelectPatient={(id) => { setSelectedPatientId(id); setActiveTab('patients'); }} />;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', paddingBottom: '70px', backgroundColor: '#f4f7f6' }}>
      
      {/* Dynamic Screen Content */}
      <main>
        {renderScreen()}
      </main>

      {/* Bottom Navigation Bar */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyBy: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #e0e0e0',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
        zIndex: 1000
      }}>
        <button 
          onClick={() => setActiveTab('home')}
          style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#00a896' : '#666', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: '18px' }}>🏠</div>
          <div style={{ fontSize: '11px', fontWeight: activeTab === 'home' ? 'bold' : 'normal' }}>Home</div>
        </button>

        <button 
          onClick={() => setActiveTab('patients')}
          style={{ background: 'none', border: 'none', color: activeTab === 'patients' ? '#00a896' : '#666', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: '18px' }}>👥</div>
          <div style={{ fontSize: '11px', fontWeight: activeTab === 'patients' ? 'bold' : 'normal' }}>Patients</div>
        </button>

        <button 
          onClick={() => setActiveTab('add')}
          style={{ background: 'none', border: 'none', color: activeTab === 'add' ? '#00a896' : '#666', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: '18px' }}>👤➕</div>
          <div style={{ fontSize: '11px', fontWeight: activeTab === 'add' ? 'bold' : 'normal' }}>Add Patient</div>
        </button>

        <button 
          onClick={() => setActiveTab('reports')}
          style={{ background: 'none', border: 'none', color: activeTab === 'reports' ? '#00a896' : '#666', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: '18px' }}>📊</div>
          <div style={{ fontSize: '11px', fontWeight: activeTab === 'reports' ? 'bold' : 'normal' }}>Reports</div>
        </button>

        <button 
          onClick={() => setActiveTab('settings')}
          style={{ background: 'none', border: 'none', color: activeTab === 'settings' ? '#00a896' : '#666', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: '18px' }}>⚙️</div>
          <div style={{ fontSize: '11px', fontWeight: activeTab === 'settings' ? 'bold' : 'normal' }}>Settings</div>
        </button>
      </nav>

    </div>
  );
}
