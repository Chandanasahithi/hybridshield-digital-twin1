function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-[#e3ecf2] flex items-center justify-between px-6 lg:px-8 sticky top-0 z-30">

      {/* LEFT */}

      <div>

        <p className="text-xs text-[#a2c1d1] uppercase tracking-widest font-semibold">
          HybridShield
        </p>

        <p className="text-sm font-semibold text-[#2f4157]">
          Security Operations Center
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* System Status */}

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#f3f6f9] border border-[#e3ecf2]">

          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>

          <span className="text-sm font-medium text-[#567c8e]">
            All Systems Operational
          </span>

        </div>

        {/* Notification */}

        <button className="w-10 h-10 rounded-xl bg-[#f3f6f9] border border-[#e3ecf2] flex items-center justify-center hover:bg-[#e3ecf2] transition">
          🔔
        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-[#2f4157] text-white flex items-center justify-center font-bold">
            A
          </div>

          <div className="hidden md:block">

            <p className="text-sm font-bold text-[#2f4157]">
              Administrator
            </p>

            <p className="text-xs text-[#567c8e]">
              Security Analyst
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;