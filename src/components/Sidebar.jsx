import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      icon: "📊",
      id: "dashboard",
    },
    {
      name: "Network",
      icon: "🌐",
      id: "network",
    },
    {
      name: "Security",
      icon: "🛡️",
      id: "security",
    },
    {
      name: "Alerts",
      icon: "🚨",
      id: "alerts",
    },
    {
      name: "Reports",
      icon: "📄",
      id: "reports",
    },
    {
      name: "Settings",
      icon: "⚙️",
      id: "settings",
    },
  ];

  const handleNavigation = (id) => {
    if (location.pathname !== "/dashboard") {
      navigate("/dashboard");

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-[#2f4157] text-white flex-col sticky top-0">

      {/* ================= LOGO ================= */}

      <div className="p-7 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xl">
            🛡️
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              HybridShield
            </h1>

            <p className="text-[#c7d9e5] text-[10px] uppercase tracking-widest mt-1">
              Security Console
            </p>

          </div>

        </div>

      </div>

      {/* ================= NAVIGATION ================= */}

      <div className="flex-1 px-4 py-6">

        <p className="text-[#a2c1d1] text-xs uppercase tracking-widest font-semibold px-4 mb-4">
          Navigation
        </p>

        <div className="space-y-2">

          {menu.map((item) => (

            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                item.id === "dashboard"
                  ? location.pathname === "/dashboard"
                    ? "bg-white text-[#2f4157] shadow-lg"
                    : "text-[#e3ecf2] hover:bg-white/10"
                  : "text-[#e3ecf2] hover:bg-white/10 hover:text-white"
              }`}
            >

              <span className="text-xl w-7 text-center">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>

            </button>

          ))}

        </div>

      </div>

      {/* ================= LIVE SYSTEM ================= */}

      <div className="px-5 pb-5">

        <div className="bg-white/10 border border-white/10 rounded-2xl p-5">

          <div className="flex items-center justify-between mb-4">

            <h3 className="font-bold text-[#e3ecf2]">
              Live System
            </h3>

            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>

          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-[#c7d9e5]">
                Firewall
              </span>
              <span className="text-green-300">
                Online
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#c7d9e5]">
                VPN
              </span>
              <span className="text-green-300">
                Secure
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#c7d9e5]">
                Cloud
              </span>
              <span className="text-green-300">
                Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#c7d9e5]">
                Security
              </span>
              <span className="text-[#a2c1d1] font-bold">
                96%
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* ================= LOGOUT ================= */}

      <div className="p-5 border-t border-white/10">

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-200 text-[#e3ecf2] font-semibold transition"
        >
          ← Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;