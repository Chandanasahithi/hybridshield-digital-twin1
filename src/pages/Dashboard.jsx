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

  // Download Security Report
  const downloadSecurityReport = () => {
    const report = `
HYBRIDSHIELD SECURITY REPORT
========================================

AI-Powered Hybrid Data Center Digital Twin

Generated:
${new Date().toLocaleString()}


SYSTEM SECURITY STATUS
----------------------------------------
Security Score : ${attackMode ? "68%" : "96%"}
Threat Level   : ${attackMode ? "HIGH" : "LOW"}
Servers Online : 12
Cloud Status   : Connected
VPN Status     : Active
Active Alerts  : ${attackMode ? "7" : "2"}


NETWORK STATUS
----------------------------------------
Internet             : Connected
Firewall             : Online
VPN Gateway          : Secure
Private Data Center  : Operational
Cloud Infrastructure : Connected


THREAT ANALYSIS
----------------------------------------
${
  attackMode
    ? `WARNING - SIMULATED CYBER ATTACK ACTIVE

A simulated cyber attack has been detected
inside the Hybrid Data Center.

Security Score : 68%
Threat Level   : HIGH

Recommended action:
- Isolate affected device
- Review authentication activity
- Monitor network traffic
- Increase firewall monitoring
- Run security scan`
    : `SYSTEM SECURE

No active cyber attack detected.

Security Score : 96%
Threat Level   : LOW

All monitored infrastructure is operating
within normal conditions.`
}


AI SECURITY RECOMMENDATIONS
----------------------------------------
1. Continue real-time infrastructure monitoring.
2. Maintain firewall protection.
3. Monitor VPN authentication activity.
4. Review security alerts regularly.
5. Perform periodic attack simulations.
6. Monitor cloud connectivity.


COMPLIANCE STATUS
----------------------------------------
Daily Security Report  : Generated
Weekly Threat Analysis : Completed
Security Compliance    : PASSED


DIGITAL TWIN COMPONENTS
----------------------------------------
Private Data Center : Online
Cloud              : Connected
Firewall           : Online
VPN Gateway        : Secure
Servers            : 12 Active
Monitoring         : Enabled


========================================
HybridShield
AI-Powered Hybrid Data Center Digital Twin

Cisco Internship Prototype
Version 1.0
========================================
`;

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "HybridShield-Security-Report.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#eef4f7] text-[#2f4157] flex">

      {/* ================= SIDEBAR ================= */}

      <aside className="w-72 min-h-screen bg-[#1f3346] text-white flex flex-col shadow-xl">

        <Sidebar />

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="flex-1 min-w-0 overflow-y-auto">

        {/* Navbar */}

        <div className="sticky top-0 z-20 bg-[#eef4f7]/95 backdrop-blur-md border-b border-[#d9e5ec]">

          <Navbar />

        </div>


        <div className="p-8">


          {/* ================= HEADER ================= */}

          <section id="dashboard">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <div>

                <p className="text-sm font-semibold text-[#567c8e] uppercase tracking-wider">
                  Digital Twin Console
                </p>

                <h1 className="text-4xl font-bold text-[#2f4157] mt-2">
                  HybridShield Dashboard
                </h1>

                <p className="text-[#567c8e] mt-2">
                  AI-Powered Hybrid Data Center Digital Twin
                </p>

              </div>


              {/* System Indicator */}

              <div className="flex items-center gap-3 bg-white border border-[#d9e5ec] rounded-xl px-5 py-3 shadow-sm">

                <span
                  className={`w-3 h-3 rounded-full ${
                    attackMode
                      ? "bg-red-500 animate-pulse"
                      : "bg-green-500"
                  }`}
                ></span>

                <div>

                  <p className="text-xs text-[#7890a0]">
                    SYSTEM STATUS
                  </p>

                  <p className="font-bold text-[#2f4157]">
                    {attackMode ? "Threat Detected" : "All Systems Operational"}
                  </p>

                </div>

              </div>

            </div>


            {/* ================= ATTACK CONTROLS ================= */}

            <div className="mt-7 flex flex-wrap gap-3">

              <button
                onClick={() => setAttackMode(true)}
                disabled={attackMode}
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  attackMode
                    ? "bg-red-200 text-red-500 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700 shadow-sm"
                }`}
              >
                🚨 Simulate Cyber Attack
              </button>


              {attackMode && (

                <button
                  onClick={() => setAttackMode(false)}
                  className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-sm"
                >
                  🛡 Mitigate Attack
                </button>

              )}

            </div>


            {/* ================= STATUS BANNER ================= */}

            <div
              className={`mt-6 rounded-2xl p-5 border ${
                attackMode
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${
                    attackMode
                      ? "bg-red-100"
                      : "bg-green-100"
                  }`}
                >
                  {attackMode ? "⚠️" : "🛡️"}
                </div>


                <div>

                  <h2
                    className={`text-lg font-bold ${
                      attackMode
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    {attackMode
                      ? "Cyber Attack Detected"
                      : "System Secure"}
                  </h2>

                  <p
                    className={`text-sm mt-1 ${
                      attackMode
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {attackMode
                      ? "Suspicious activity detected inside the Hybrid Data Center."
                      : "All monitored infrastructure is operating normally."}
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= SECURITY OVERVIEW ================= */}

          <section id="security" className="mt-10">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Security Overview
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Real-time security posture of the hybrid infrastructure
              </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

              <StatusCard
                title="Security Score"
                value={attackMode ? "68%" : "96%"}
                color={
                  attackMode
                    ? "text-red-600"
                    : "text-green-600"
                }
              />


              <StatusCard
                title="Threat Level"
                value={attackMode ? "HIGH" : "LOW"}
                color={
                  attackMode
                    ? "text-red-600"
                    : "text-yellow-600"
                }
              />


              <StatusCard
                title="Servers Online"
                value="12"
                color="text-cyan-700"
              />


              <StatusCard
                title="Cloud Status"
                value="Connected"
                color="text-blue-700"
              />


              <StatusCard
                title="VPN Status"
                value="Active"
                color="text-green-600"
              />


              <StatusCard
                title="Active Alerts"
                value={attackMode ? "7" : "2"}
                color="text-red-600"
              />

            </div>

          </section>


          {/* ================= NETWORK ================= */}

          <section id="network" className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Hybrid Network Topology
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Digital representation of the hybrid data center infrastructure
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-5">

              <NetworkMap
                attackMode={attackMode}
                setSelectedDevice={setSelectedDevice}
              />

            </div>

          </section>


          {/* ================= ALERTS ================= */}

          <section id="alerts" className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Security Alerts
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Detected security events and AI-powered recommendations
              </p>

            </div>


            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {/* Alert Panel */}

              <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

                <AlertPanel attackMode={attackMode} />

              </div>


              {/* AI Recommendations */}

              <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

                <AIRecommendations
                  attackMode={attackMode}
                />

              </div>

            </div>

          </section>


          {/* ================= DEVICE MONITORING ================= */}

          <section className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Device Monitoring
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Monitor servers, gateways and infrastructure devices
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

              <DeviceTable
                attackMode={attackMode}
              />

            </div>

          </section>


          {/* ================= DEVICE DETAILS ================= */}

          {selectedDevice && (

            <section className="mt-8">

              <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-xl font-bold text-[#2f4157]">
                    Selected Device
                  </h2>

                  <button
                    onClick={() => setSelectedDevice(null)}
                    className="text-[#567c8e] hover:text-red-600"
                  >
                    ✕ Close
                  </button>

                </div>

                <DeviceDetails
                  device={selectedDevice}
                />

              </div>

            </section>

          )}


          {/* ================= SYSTEM STATUS ================= */}

          <section className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                System Status
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Infrastructure health and service availability
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

              <SystemStatus />

            </div>

          </section>


          {/* ================= PERFORMANCE ================= */}

          <section className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Infrastructure Performance
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Simulated CPU utilization and network traffic
              </p>

            </div>


            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-5">

                <CpuChart />

              </div>


              <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-5">

                <TrafficChart />

              </div>

            </div>

          </section>


          {/* ================= REPORTS ================= */}

          <section id="reports" className="mt-12">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Security Reports
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                Generate and download security analysis reports
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-[#f3f6f9] rounded-xl p-5">

                  <p className="text-sm text-[#567c8e]">
                    Daily Security Report
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ✓ Generated
                  </p>

                </div>


                <div className="bg-[#f3f6f9] rounded-xl p-5">

                  <p className="text-sm text-[#567c8e]">
                    Weekly Threat Analysis
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ✓ Completed
                  </p>

                </div>


                <div className="bg-[#f3f6f9] rounded-xl p-5">

                  <p className="text-sm text-[#567c8e]">
                    Compliance Status
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ✓ Passed
                  </p>

                </div>

              </div>


              <button
                onClick={downloadSecurityReport}
                className="mt-6 px-6 py-3 rounded-xl bg-[#2f4157] text-white font-semibold hover:bg-[#567c8e] transition"
              >
                📄 Download Security Report
              </button>

            </div>

          </section>


          {/* ================= SETTINGS ================= */}

          <section
            id="settings"
            className="mt-12 mb-20"
          >

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#2f4157]">
                Settings
              </h2>

              <p className="text-sm text-[#567c8e] mt-1">
                HybridShield monitoring configuration
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-[#d9e5ec] shadow-sm p-6">

              <div className="space-y-4">

                <div className="flex items-center justify-between p-4 bg-[#f3f6f9] rounded-xl">

                  <div>

                    <p className="font-semibold text-[#2f4157]">
                      🌙 Theme
                    </p>

                    <p className="text-sm text-[#567c8e]">
                      Current interface appearance
                    </p>

                  </div>

                  <span className="text-[#567c8e] font-medium">
                    Light
                  </span>

                </div>


                <div className="flex items-center justify-between p-4 bg-[#f3f6f9] rounded-xl">

                  <div>

                    <p className="font-semibold text-[#2f4157]">
                      🔔 Notifications
                    </p>

                    <p className="text-sm text-[#567c8e]">
                      Security event notifications
                    </p>

                  </div>

                  <span className="text-green-600 font-semibold">
                    Enabled
                  </span>

                </div>


                <div className="flex items-center justify-between p-4 bg-[#f3f6f9] rounded-xl">

                  <div>

                    <p className="font-semibold text-[#2f4157]">
                      🛡 Auto Scan
                    </p>

                    <p className="text-sm text-[#567c8e]">
                      Continuous infrastructure scanning
                    </p>

                  </div>

                  <span className="text-green-600 font-semibold">
                    Enabled
                  </span>

                </div>


                <div className="flex items-center justify-between p-4 bg-[#f3f6f9] rounded-xl">

                  <div>

                    <p className="font-semibold text-[#2f4157]">
                      ☁ Cloud Sync
                    </p>

                    <p className="text-sm text-[#567c8e]">
                      Hybrid cloud synchronization
                    </p>

                  </div>

                  <span className="text-green-600 font-semibold">
                    Active
                  </span>

                </div>

              </div>

            </div>

          </section>


        </div>

      </main>

    </div>
  );
}

export default Dashboard;