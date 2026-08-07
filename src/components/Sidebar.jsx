import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: "📊",
      path: "/dashboard",
    },
    {
      name: "Network",
      icon: "🌐",
      path: "/dashboard#network",
    },
    {
      name: "Security",
      icon: "🛡️",
      path: "/dashboard#security",
    },
    {
      name: "Alerts",
      icon: "🚨",
      path: "/dashboard#alerts",
    },
    {
      name: "Reports",
      icon: "📄",
      path: "/dashboard#reports",
    },
    {
      name: "Settings",
      icon: "⚙️",
      path: "/dashboard#settings",
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-950 border-r border-cyan-500/20 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-cyan-400">
          HybridShield
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Hybrid Data Center Digital Twin
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 mt-6">

        {menu.map((item, index) => (

          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-4 px-8 py-4 mx-4 rounded-xl mb-2 transition-all duration-300

            ${
              location.pathname === "/dashboard" &&
              item.name === "Dashboard"
                ? "bg-cyan-600 text-white"
                : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
            }`}
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.name}
            </span>

          </Link>

        ))}

      </div>

      {/* Live System */}

      <div className="mx-5 mb-5 bg-slate-900 rounded-xl p-4 border border-cyan-500/20">

        <h3 className="text-cyan-400 font-bold mb-4">
          Live System
        </h3>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span>Firewall</span>
            <span className="text-green-400">● Online</span>
          </div>

          <div className="flex justify-between">
            <span>VPN</span>
            <span className="text-green-400">● Secure</span>
          </div>

          <div className="flex justify-between">
            <span>Cloud</span>
            <span className="text-green-400">● Connected</span>
          </div>

          <div className="flex justify-between">
            <span>Security</span>
            <span className="text-cyan-400">96%</span>
          </div>

        </div>

      </div>

      {/* Logout */}

      <div className="p-5 border-t border-slate-800">

        <button className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-semibold">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;