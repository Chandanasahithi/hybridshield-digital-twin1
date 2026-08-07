import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl shadow-lg">

      {/* Left */}
      <h1 className="text-2xl font-bold text-cyan-400">
        🛡 HybridShield
      </h1>

      {/* Search */}
      <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2 w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search devices..."
          className="bg-transparent outline-none text-white ml-2 w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <Bell className="text-white cursor-pointer" />

        <div className="flex items-center gap-2">
          <UserCircle size={32} className="text-cyan-400" />
          <span className="text-white">Admin</span>
        </div>

        <span className="text-gray-300">
          {currentTime}
        </span>

      </div>

    </div>
  );
}

export default Navbar;