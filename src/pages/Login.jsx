import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      navigate("/dashboard");
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6f9] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* ================= BACKGROUND SHAPES ================= */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#a2c1d1]/30 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[#c7d9e5]/40 rounded-full blur-3xl" />

      {/* ================= MAIN CARD ================= */}

      <div className="relative w-full max-w-6xl min-h-[650px] bg-white/80 backdrop-blur-xl border border-white rounded-[32px] shadow-[0_25px_80px_rgba(47,65,87,0.18)] overflow-hidden flex flex-col lg:flex-row">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="lg:w-[55%] relative bg-gradient-to-br from-[#2f4157] via-[#3d596d] to-[#567c8e] p-10 lg:p-14 text-white overflow-hidden">

          {/* Decorative circles */}

          <div className="absolute w-72 h-72 rounded-full border border-white/10 -top-24 -right-24" />

          <div className="absolute w-96 h-96 rounded-full border border-white/10 -bottom-48 -left-40" />

          <div className="relative z-10">

            {/* Brand */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                🛡️
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  HybridShield
                </h1>

                <p className="text-[#c7d9e5] text-xs tracking-[0.25em] uppercase mt-1">
                  Security Intelligence
                </p>
              </div>

            </div>

            {/* Main heading */}

            <div className="mt-16 max-w-xl">

              <p className="text-[#a2c1d1] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                Digital Twin Security Platform
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Secure your
                <span className="text-[#c7d9e5]"> hybrid infrastructure.</span>
              </h2>

              <p className="text-[#e3ecf2]/80 text-lg leading-relaxed mt-6 max-w-lg">
                AI-powered monitoring and simulation for modern hybrid
                data center environments.
              </p>

            </div>

            {/* ================= NETWORK VISUAL ================= */}

            <div className="mt-14 relative">

              <p className="text-[#e3ecf2]/60 text-xs uppercase tracking-widest mb-5">
                Hybrid Infrastructure
              </p>

              <div className="flex items-center gap-2 sm:gap-4">

                {/* Internet */}

                <div className="flex flex-col items-center">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                    🌐
                  </div>

                  <span className="text-xs text-[#e3ecf2]/70 mt-2">
                    Internet
                  </span>

                </div>

                <div className="flex-1 h-px bg-[#a2c1d1]/50" />

                {/* Firewall */}

                <div className="flex flex-col items-center">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                    🔥
                  </div>

                  <span className="text-xs text-[#e3ecf2]/70 mt-2">
                    Firewall
                  </span>

                </div>

                <div className="flex-1 h-px bg-[#a2c1d1]/50" />

                {/* Data Center */}

                <div className="flex flex-col items-center">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                    🖥️
                  </div>

                  <span className="text-xs text-[#e3ecf2]/70 mt-2">
                    Data Center
                  </span>

                </div>

                <div className="flex-1 h-px bg-[#a2c1d1]/50" />

                {/* Cloud */}

                <div className="flex flex-col items-center">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                    ☁️
                  </div>

                  <span className="text-xs text-[#e3ecf2]/70 mt-2">
                    Cloud
                  </span>

                </div>

              </div>

            </div>

            {/* ================= FEATURES ================= */}

            <div className="grid grid-cols-2 gap-3 mt-12 max-w-lg">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">

                <p className="text-lg">🛡️</p>

                <p className="font-semibold mt-2 text-sm">
                  Threat Detection
                </p>

                <p className="text-xs text-[#e3ecf2]/60 mt-1">
                  Real-time monitoring
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">

                <p className="text-lg">🤖</p>

                <p className="font-semibold mt-2 text-sm">
                  AI Insights
                </p>

                <p className="text-xs text-[#e3ecf2]/60 mt-1">
                  Smart recommendations
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">

                <p className="text-lg">🌐</p>

                <p className="font-semibold mt-2 text-sm">
                  Digital Twin
                </p>

                <p className="text-xs text-[#e3ecf2]/60 mt-1">
                  Network visualization
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">

                <p className="text-lg">⚡</p>

                <p className="font-semibold mt-2 text-sm">
                  Attack Simulation
                </p>

                <p className="text-xs text-[#e3ecf2]/60 mt-1">
                  Security testing
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT SIDE LOGIN
        ====================================================== */}

        <div className="lg:w-[45%] bg-white p-10 lg:p-14 flex flex-col justify-center">

          {/* Header */}

          <div className="max-w-md mx-auto w-full">

            <div className="mb-10">

              <p className="text-[#567c8e] text-sm font-semibold uppercase tracking-widest mb-3">
                Secure Console
              </p>

              <h2 className="text-4xl font-bold text-[#2f4157]">
                Welcome back
              </h2>

              <p className="text-[#567c8e] mt-3">
                Sign in to access your HybridShield dashboard.
              </p>

            </div>

            {/* FORM */}

            <form onSubmit={handleLogin} className="space-y-6">

              {/* Email */}

              <div>

                <label className="block text-sm font-semibold text-[#2f4157] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-[#f3f6f9] border border-[#c7d9e5] text-[#2f4157] placeholder-[#a2c1d1] outline-none transition focus:border-[#567c8e] focus:ring-4 focus:ring-[#a2c1d1]/20"
                />

              </div>

              {/* Password */}

              <div>

                <div className="flex justify-between items-center mb-2">

                  <label className="text-sm font-semibold text-[#2f4157]">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-[#567c8e] hover:text-[#2f4157]"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-[#f3f6f9] border border-[#c7d9e5] text-[#2f4157] placeholder-[#a2c1d1] outline-none transition focus:border-[#567c8e] focus:ring-4 focus:ring-[#a2c1d1]/20"
                />

              </div>

              {/* Remember */}

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 accent-[#2f4157]"
                />

                <span className="text-sm text-[#567c8e]">
                  Remember me
                </span>

              </label>

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#2f4157] hover:bg-[#567c8e] text-white font-bold transition-all duration-300 shadow-lg shadow-[#2f4157]/20 hover:shadow-xl"
              >
                Sign in to HybridShield
              </button>

            </form>

            {/* SECURITY STATUS */}

            <div className="mt-10 border-t border-[#e3ecf2] pt-8">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#e3ecf2] flex items-center justify-center">
                    🛡️
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-[#2f4157]">
                      Secure Connection
                    </p>

                    <p className="text-xs text-[#567c8e]">
                      HybridShield Console
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                  <span className="text-xs font-semibold text-[#567c8e]">
                    Online
                  </span>

                </div>

              </div>

            </div>

            {/* FOOTER */}

            <div className="text-center mt-10">

              <p className="text-xs text-[#a2c1d1]">
                HybridShield Security Platform
              </p>

              <p className="text-xs text-[#c7d9e5] mt-1">
                Cisco Internship Prototype • Version 1.0
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;