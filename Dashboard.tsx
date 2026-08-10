<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kadir Bux Dental Lab & Clinic - 3D Dashboard</title>
  <!-- FontAwesome for fallback icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * { box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; }
    body { background: #eef2f6; color: #1e293b; padding: 15px; }
    .app-container { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; }

    /* Header with 3D Tooth Logo */
    header { background: linear-gradient(135deg, #1e3a8a, #0284c7); color: white; padding: 18px 20px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 20px rgba(2,132,199,0.2); }
    .brand-group { display: flex; align-items: center; gap: 12px; }
    .brand-logo-3d { width: 50px; height: 50px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); }
    .brand-text h1 { font-size: 20px; font-weight: 800; }
    .brand-text p { font-size: 11px; opacity: 0.85; margin-top: 2px; }
    .status-pill { background: #22c55e; color: white; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; border: 2px solid rgba(255,255,255,0.3); }

    /* 3D Stat Cards */
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; }
    .stat-card { background: white; border-radius: 14px; padding: 16px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: transform 0.2s; }
    .stat-card:hover { transform: translateY(-3px); }
    .stat-info p { font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; }
    .stat-info h2 { font-size: 26px; font-weight: 800; color: #0f172a; margin-top: 4px; }
    .stat-info h2.red { color: #ef4444; }
    .icon-3d { width: 55px; height: 55px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12)); }

    /* Grid Sections */
    .main-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 15px; }
    @media (max-width: 900px) { .main-grid { grid-template-columns: 1fr; } }

    /* Panels */
    .panel { background: white; border-radius: 14px; padding: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
    .panel-header { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
    .panel-header h3 { font-size: 15px; font-weight: 800; color: #0284c7; }

    /* Form Styles */
    .form-group { margin-bottom: 12px; }
    .form-group label { display: block; font-size: 11px; font-weight: 700; color: #475569; margin-bottom: 4px; text-transform: uppercase; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px; outline: none; transition: border 0.2s; }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #0284c7; }
    .form-row { display: flex; gap: 10px; }
    .form-row .form-group { flex: 1; }

    /* Buttons */
    .btn { width: 100%; padding: 12px; border-radius: 8px; border: none; font-weight: bold; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; color: white; transition: opacity 0.2s; }
    .btn:hover { opacity: 0.9; }
    .btn-blue { background: #0284c7; }
    .btn-teal { background: #0f766e; }

    /* Dental Chart Layout */
    .tooth-chart { display: flex; flex-direction: column; gap: 12px; align-items: center; padding: 10px 0; }
    .tooth-row { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
    .tooth-item { display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; }
    .tooth-item span { font-size: 9px; font-weight: bold; color: #64748b; }
    .tooth-icon { width: 18px; height: 26px; border: 1.5px solid #94a3b8; border-radius: 4px 4px 8px 8px; background: #f8fafc; }
    .tooth-item.done .tooth-icon { background: #0284c7; border-color: #0369a1; }
    .tooth-item.progress .tooth-icon { background: #eab308; border-color: #ca8a04; }

    /* Table Styles */
    .table-container { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; text-align: left; min-width: 600px; }
    th { background: #f8fafc; color: #475569; padding: 10px 8px; font-size: 11px; font-weight: 700; border-bottom: 2px solid #e2e8f0; }
    td { padding: 10px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #334155; }
    .badge-status { background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 12px; font-size: 10px; font-weight: bold; }
    
    /* Footer */
    footer { text-align: center; font-size: 11px; color: #64748b; padding: 10px; font-weight: 600; }
  </style>
</head>
<body>

  <div class="app-container">

    <!-- Header -->
    <header>
      <div class="brand-group">
        <img src="https://cdn-icons-png.flaticon.com/512/3004/3004416.png" class="brand-logo-3d" alt="Tooth Logo">
        <div class="brand-text">
          <h1>Kadir Bux Dental Lab & Clinic</h1>
          <p>Practice & Dental Lab Management System</p>
        </div>
      </div>
      <span class="status-pill">Active System</span>
    </header>

    <!-- 3D Stat Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <p>Total Patients</p>
          <h2>148</h2>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" class="icon-3d" alt="Patients">
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <p>Today Lab Work</p>
          <h2>12</h2>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2877/2877028.png" class="icon-3d" alt="Lab Work">
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <p>Pending Payments</p>
          <h2 class="red">₹4,200</h2>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" class="icon-3d" alt="Payments">
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <p>Completed Cases</p>
          <h2>136</h2>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="icon-3d" alt="Completed">
      </div>
    </div>

    <!-- Main Forms Grid -->
    <div class="main-grid">
      
      <!-- Left Panel: Patient Entry & Treatment -->
      <div class="panel">
        <div class="panel-header">
          <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" class="icon-3d" style="width: 30px; height: 30px;" alt="Form Icon">
          <h3>+ New Patient Registration & Case Entry</h3>
        </div>
        
        <form>
          <div class="form-row">
            <div class="form-group">
              <label>Patient Full Name</label>
              <input type="text" placeholder="e.g. Ravi Kumar" required>
            </div>
            <div class="form-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="10 Digit Number">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Age</label>
              <input type="number" placeholder="Years">
            </div>
            <div class="form-group">
              <label>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label>Blood Group</label>
              <select>
                <option>O+</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Treatment Type</label>
              <select>
                <option>PFM Crown</option>
                <option>Zirconia Crown</option>
                <option>Root Canal (RCT)</option>
                <option>Complete Denture</option>
                <option>Scaling / Cleaning</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tooth Number(s)</label>
              <input type="text" placeholder="e.g. 11, 12, 13">
            </div>
          </div>

          <div class="form-group">
            <label>Dentist Notes / Special Instructions</label>
            <textarea rows="2" placeholder="Shade details, margins, or special notes..."></textarea>
          </div>

          <button type="button" class="btn btn-blue">
            <i class="fa-solid fa-floppy-disk"></i> Save Patient Record
          </button>
        </form>
      </div>

      <!-- Right Panel: Lab Order & Dental Chart Preview -->
      <div class="panel">
        <div class="panel-header">
          <img src="https://cdn-icons-png.flaticon.com/512/3004/3004416.png" class="icon-3d" style="width: 30px; height: 30px;" alt="Dental Chart">
          <h3>Interactive Dental Chart & Lab Billing</h3>
        </div>

        <!-- FDI Dental Chart Layout -->
        <div class="tooth-chart">
          <p style="font-size: 11px; font-weight: bold; color: #64748b;">UPPER TEETH</p>
          <div class="tooth-row">
            <div class="tooth-item"><span>18</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>17</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>16</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>15</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>14</span><div class="tooth-icon"></div></div>
            <div class="tooth-item done"><span>13</span><div class="tooth-icon"></div></div>
            <div class="tooth-item done"><span>12</span><div class="tooth-icon"></div></div>
            <div class="tooth-item done"><span>11</span><div class="tooth-icon"></div></div>
            <div class="tooth-item progress"><span>21</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>22</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>23</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>24</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>25</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>26</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>27</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>28</span><div class="tooth-icon"></div></div>
          </div>

          <p style="font-size: 11px; font-weight: bold; color: #64748b; margin-top: 5px;">LOWER TEETH</p>
          <div class="tooth-row">
            <div class="tooth-item"><span>48</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>47</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>46</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>45</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>44</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>43</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>42</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>41</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>31</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>32</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>33</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>34</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>35</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>36</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>37</span><div class="tooth-icon"></div></div>
            <div class="tooth-item"><span>38</span><div class="tooth-icon"></div></div>
          </div>
        </div>

        <!-- Billing Inputs -->
        <div class="form-row" style="margin-top: 10px;">
          <div class="form-group">
            <label>Total Amount (₹)</label>
            <input type="number" placeholder="0.00">
          </div>
          <div class="form-group">
            <label>Paid Amount (₹)</label>
            <input type="number" placeholder="0.00">
          </div>
        </div>

        <button type="button" class="btn btn-teal">
          <i class="fa-solid fa-file-invoice"></i> Create Lab Job & Invoice
        </button>
      </div>

    </div>

    <!-- Recent Patients Table -->
    <div class="panel">
      <div class="panel-header">
        <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" class="icon-3d" style="width: 28px; height: 28px;" alt="Logs">
        <h3>Recent Patient Records & Lab History</h3>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>PATIENT ID</th>
              <th>NAME</th>
              <th>MOBILE</th>
              <th>TREATMENT</th>
              <th>TOOTH NO.</th>
              <th>STATUS</th>
              <th>TOTAL FEE</th>
              <th>PAID</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PID-000123</td>
              <td>Ravi</td>
              <td>7983126706</td>
              <td>PFM Crown</td>
              <td>11, 12, 13</td>
              <td><span class="badge-status">Completed</span></td>
              <td>₹600</td>
              <td>₹600</td>
              <td>
                <i class="fa-solid fa-file-pdf" style="color:#0284c7; cursor:pointer; margin-right:8px;"></i>
                <i class="fa-solid fa-print" style="color:#475569; cursor:pointer;"></i>
              </td>
            </tr>
            <tr>
              <td>PID-000122</td>
              <td>Amit Sharma</td>
              <td>9876543210</td>
              <td>RCT Treatment</td>
              <td>21</td>
              <td><span class="badge-status">Completed</span></td>
              <td>₹1,200</td>
              <td>₹1,200</td>
              <td>
                <i class="fa-solid fa-file-pdf" style="color:#0284c7; cursor:pointer; margin-right:8px;"></i>
                <i class="fa-solid fa-print" style="color:#475569; cursor:pointer;"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <p>Kadir Bux Dental Lab & Clinic • Practice Management System</p>
    </footer>

  </div>

</body>
</html>
