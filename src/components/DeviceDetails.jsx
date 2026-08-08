function DeviceDetails({ selectedDevice }) {
  if (!selectedDevice) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">
        <h2 className="text-2xl font-bold text-cyan-400">
          Device Details
        </h2>

        <p className="text-gray-400 mt-4">
          Click on any device in the Network Topology to view its live metrics.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        {selectedDevice.name}
      </h2>

      <p className="mb-3">
        <strong>Status:</strong> {selectedDevice.status}
      </p>

      <p className="mb-2">
        <strong>CPU Usage</strong>
      </p>

      <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
        <div
          className="bg-red-500 h-4 rounded-full"
          style={{ width: selectedDevice.cpu }}
        ></div>
      </div>

      <p className="mb-2">
        <strong>RAM Usage</strong>
      </p>

      <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
        <div
          className="bg-yellow-500 h-4 rounded-full"
          style={{ width: selectedDevice.ram }}
        ></div>
      </div>

      <p className="mb-3">
        <strong>Network:</strong> {selectedDevice.network}
      </p>

      <p className="mb-3">
        <strong>Location:</strong> {selectedDevice.location}
      </p>

      <p className="mb-3">
        <strong>Uptime:</strong> 21 Days
      </p>

      <p>
        <strong>Temperature:</strong>{" "}
        {selectedDevice.status === "Under Attack" ||
        selectedDevice.status === "Compromised"
          ? "67°C"
          : "39°C"}
      </p>

    </div>
  );
}

export default DeviceDetails;