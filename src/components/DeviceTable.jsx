function DeviceTable({ attackMode }) {
  const devices = [
    {
      name: "Firewall",
      status: attackMode ? "Under Attack" : "Online",
      cpu: attackMode ? "82%" : "35%",
      network: attackMode ? "Critical" : "Healthy",
    },
    {
      name: "Private Server",
      status: attackMode ? "High Load" : "Online",
      cpu: attackMode ? "90%" : "42%",
      network: attackMode ? "Warning" : "Healthy",
    },
    {
      name: "Database",
      status: attackMode ? "Compromised" : "Online",
      cpu: attackMode ? "95%" : "58%",
      network: attackMode ? "Critical" : "Healthy",
    },
    {
      name: "VPN Gateway",
      status: "Online",
      cpu: attackMode ? "60%" : "21%",
      network: attackMode ? "Busy" : "Healthy",
    },
    {
      name: "Cloud Connector",
      status: "Connected",
      cpu: attackMode ? "45%" : "18%",
      network: "Connected",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Device Monitoring
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-600">
            <th className="pb-3">Device</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">CPU</th>
            <th className="pb-3">Network</th>
          </tr>
        </thead>

        <tbody>
          {devices.map((device, index) => (
            <tr key={index} className="border-b border-slate-700">
              <td className="py-4">{device.name}</td>

              <td
                className={`font-semibold ${
                  device.status === "Online" ||
                  device.status === "Connected"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {device.status}
              </td>

              <td>{device.cpu}</td>

              <td>{device.network}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeviceTable;