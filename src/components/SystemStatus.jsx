function SystemStatus() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        System Status
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h3 className="text-gray-400">Firewall</h3>
          <p className="text-green-400 text-xl font-bold">Operational</p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h3 className="text-gray-400">VPN</h3>
          <p className="text-green-400 text-xl font-bold">Connected</p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h3 className="text-gray-400">Cloud Link</h3>
          <p className="text-green-400 text-xl font-bold">Healthy</p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h3 className="text-gray-400">Database</h3>
          <p className="text-green-400 text-xl font-bold">Secure</p>
        </div>

      </div>

    </div>
  );
}

export default SystemStatus;