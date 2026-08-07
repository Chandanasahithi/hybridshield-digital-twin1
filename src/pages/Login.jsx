import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-10 left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-20"></div>

      {/* Login Card */}

      <div className="backdrop-blur-xl bg-white/10 border border-cyan-500/30 rounded-3xl shadow-2xl w-[900px] flex overflow-hidden">

        {/* Left Side */}

<div className="w-1/2 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-10 flex flex-col justify-between">

  <div>

    <h1 className="text-5xl font-extrabold text-cyan-400">
      HybridShield
    </h1>

    <p className="text-gray-300 mt-3 text-lg">
      AI-Powered Hybrid Data Center Digital Twin
    </p>

    <p className="text-gray-500 mt-2">
      Monitor • Detect • Protect • Simulate
    </p>

  </div>

  {/* Mini Network Topology */}

  <div className="mt-10">

    <h2 className="text-cyan-300 text-xl font-bold mb-6">
      Infrastructure Overview
    </h2>

    <div className="flex flex-col items-center text-2xl space-y-2">

      <span>🌍 Internet</span>

      <span className="text-cyan-400">↓</span>

      <span>🔥 Firewall</span>

      <span className="text-cyan-400">↓</span>

      <span>🔒 VPN Gateway</span>

      <span className="text-cyan-400">↓</span>

      <span>🖥️ Private Data Center</span>

      <span className="text-cyan-400">↓</span>

      <span>🗄️ Database</span>

      <span className="text-cyan-400">↓</span>

      <span>☁️ Azure Cloud</span>

    </div>

  </div>

  {/* Live Status */}

  <div className="grid grid-cols-2 gap-4 mt-10">

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🟢 Firewall</p>
      <p className="text-gray-300 text-sm">Online</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">☁ Cloud</p>
      <p className="text-gray-300 text-sm">Connected</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🔒 VPN</p>
      <p className="text-gray-300 text-sm">Secure</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🛡 Security</p>
      <p className="text-gray-300 text-sm">96% Score</p>
    </div>

  </div>

  {/* Footer */}

  <div className="mt-8 border-t border-slate-700 pt-4">

    <p className="text-gray-500 text-sm">
      Enterprise Security Console
    </p>

    <p className="text-cyan-400 text-sm mt-1">
      Version 1.0 | Cisco Internship Prototype
    </p>

  </div>

</div>

        <div className="w-1/2 p-10 flex flex-col justify-center bg-gradient-to-b from-cyan-900/20 to-slate-900">

          <h1 className="text-5xl font-bold text-cyan-400">
            HybridShield
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            AI-Powered Hybrid Data Center Digital Twin
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3 text-white">
              🛡 <span>Real-Time Threat Detection</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              ☁ <span>Hybrid Cloud Monitoring</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              🌐 <span>Network Digital Twin</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              🤖 <span>AI Security Recommendations</span>
            </div>

          </div>

        </div>

        {/* Left Side */}

<div className="w-1/2 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-10 flex flex-col justify-between">

  <div>

    <h1 className="text-5xl font-extrabold text-cyan-400">
      HybridShield
    </h1>

    <p className="text-gray-300 mt-3 text-lg">
      AI-Powered Hybrid Data Center Digital Twin
    </p>

    <p className="text-gray-500 mt-2">
      Monitor • Detect • Protect • Simulate
    </p>

  </div>

  {/* Mini Network Topology */}

  <div className="mt-10">

    <h2 className="text-cyan-300 text-xl font-bold mb-6">
      Infrastructure Overview
    </h2>

    <div className="flex flex-col items-center text-2xl space-y-2">

      <span>🌍 Internet</span>

      <span className="text-cyan-400">↓</span>

      <span>🔥 Firewall</span>

      <span className="text-cyan-400">↓</span>

      <span>🔒 VPN Gateway</span>

      <span className="text-cyan-400">↓</span>

      <span>🖥️ Private Data Center</span>

      <span className="text-cyan-400">↓</span>

      <span>🗄️ Database</span>

      <span className="text-cyan-400">↓</span>

      <span>☁️ Azure Cloud</span>

    </div>

  </div>

  {/* Live Status */}

  <div className="grid grid-cols-2 gap-4 mt-10">

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🟢 Firewall</p>
      <p className="text-gray-300 text-sm">Online</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">☁ Cloud</p>
      <p className="text-gray-300 text-sm">Connected</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🔒 VPN</p>
      <p className="text-gray-300 text-sm">Secure</p>
    </div>

    <div className="bg-slate-800/70 rounded-xl p-4 border border-green-500">
      <p className="text-green-400 font-bold">🛡 Security</p>
      <p className="text-gray-300 text-sm">96% Score</p>
    </div>

  </div>

  {/* Footer */}

  <div className="mt-8 border-t border-slate-700 pt-4">

    <p className="text-gray-500 text-sm">
      Enterprise Security Console
    </p>

    <p className="text-cyan-400 text-sm mt-1">
      Version 1.0 | Cisco Internship Prototype
    </p>

  </div>

</div>

        <div className="w-1/2 p-10">

          <h2 className="text-3xl font-bold text-white mb-2">
            Secure Login
          </h2>

          <p className="text-gray-400 mb-8">
            Sign in to access HybridShield Dashboard
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-800 text-white border border-cyan-500 mb-5 focus:outline-none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl bg-slate-800 text-white border border-cyan-500 mb-5 focus:outline-none"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="flex justify-between text-sm text-gray-300 mb-6">

              <label>
                <input type="checkbox" className="mr-2"/>
                Remember Me
              </label>

              <span className="text-cyan-400 cursor-pointer">
                Forgot Password?
              </span>

            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-black font-bold py-4 rounded-xl"
            >
              Login to Dashboard
            </button>

          </form>

          {/* Footer Status */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-800 rounded-xl p-3 text-center">
              🟢 Firewall Online
            </div>

            <div className="bg-slate-800 rounded-xl p-3 text-center">
              ☁ Cloud Connected
            </div>

            <div className="bg-slate-800 rounded-xl p-3 text-center">
              🔒 VPN Secure
            </div>

            <div className="bg-slate-800 rounded-xl p-3 text-center">
              🖥 12 Servers Active
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;