import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatusCard from "../components/StatusCard";
import NetworkMap from "../components/NetworkMap";
import AlertPanel from "../components/AlertPanel";
import DeviceTable from "../components/DeviceTable";
import SystemStatus from "../components/SystemStatus";
import CpuChart from "../components/CpuChart";
import TrafficChart from "../components/TrafficChart";
import AIRecommendations from "../components/AIRecommendations";
import DeviceDetails from "../components/DeviceDetails";

function Dashboard() {
  const [attackMode, setAttackMode] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        <Navbar />

        {/* Dashboard */}
        <section id="dashboard">

          <h1 className="text-4xl font-bold text-cyan-400 mt-6">
            HybridShield Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Hybrid Data Center Digital Twin
          </p>

          {/* Attack Controls */}

          <div className="mt-6 mb-6 flex gap-4">

            <button
              onClick={() => setAttackMode(true)}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
            >
              🚨 Simulate Cyber Attack
            </button>

            {attackMode && (
              <button
                onClick={() => setAttackMode(false)}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
              >
                🛡 Mitigate Attack
              </button>
            )}

          </div>

          {/* Banner */}

          <div
            className={`rounded-xl p-5 mb-8 ${
              attackMode
                ? "bg-red-700"
                : "bg-green-700"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">

              {attackMode
                ? "⚠ Cyber Attack Detected"
                : "✅ System Secure"}

            </h2>

            <p>

              {attackMode
                ? "Suspicious activity detected inside the Hybrid Data Center."
                : "All systems are operating normally."}

            </p>

          </div>

        </section>

        {/* Security */}

        <section id="security">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Security Overview
          </h2>

          <div className="grid grid-cols-3 gap-6">

            <StatusCard
              title="Security Score"
              value={attackMode ? "68%" : "96%"}
              color={attackMode ? "text-red-500" : "text-green-400"}
            />

            <StatusCard
              title="Threat Level"
              value={attackMode ? "HIGH" : "LOW"}
              color={attackMode ? "text-red-500" : "text-yellow-400"}
            />

            <StatusCard
              title="Servers Online"
              value="12"
              color="text-cyan-400"
            />

            <StatusCard
              title="Cloud Status"
              value="Connected"
              color="text-blue-400"
            />

            <StatusCard
              title="VPN Status"
              value="Active"
              color="text-green-400"
            />

            <StatusCard
              title="Alerts"
              value={attackMode ? "7" : "2"}
              color="text-red-400"
            />

          </div>

        </section>

        {/* Network */}

        <section id="network" className="mt-10">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Hybrid Network Topology
          </h2>

          <NetworkMap
            attackMode={attackMode}
            setSelectedDevice={setSelectedDevice}
          />

        </section>

        {/* Alerts */}

        <section id="alerts" className="mt-10">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Security Alerts
          </h2>

          <AlertPanel attackMode={attackMode} />

          <div className="mt-6">
            <AIRecommendations attackMode={attackMode} />
          </div>

        </section>

        {/* Devices */}

        <section className="mt-10">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Device Monitoring
          </h2>

          <DeviceTable attackMode={attackMode} />

        </section>

        {/* Device Details */}

        {selectedDevice && (
          <div className="mt-8">
            <DeviceDetails device={selectedDevice} />
          </div>
        )}

        {/* System */}

        <section className="mt-10">

          <SystemStatus />

        </section>

        {/* Charts */}

        <section className="grid grid-cols-2 gap-6 mt-10">

          <CpuChart />

          <TrafficChart />

        </section>

        {/* Reports */}

        <section id="reports" className="mt-12">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Reports
          </h2>

          <div className="bg-slate-800 rounded-xl p-6">

            <p>✔ Daily Security Report Generated</p>

            <p className="mt-2">
              ✔ Weekly Threat Analysis Completed
            </p>

            <p className="mt-2">
              ✔ Compliance Status : Passed
            </p>

            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-bold">
              Download Report
            </button>

          </div>

        </section>

        {/* Settings */}

        <section id="settings" className="mt-12 mb-20">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Settings
          </h2>

          <div className="bg-slate-800 rounded-xl p-6 space-y-4">

            <p>🌙 Theme : Dark Mode</p>

            <p>🔔 Notifications : Enabled</p>

            <p>🛡 Auto Scan : Enabled</p>

            <p>☁ Cloud Sync : Active</p>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;