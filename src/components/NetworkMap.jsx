function NetworkMap({ attackMode, setSelectedDevice }) {

  const devices = [
    {
      name: "🔥 Firewall",
      status: attackMode ? "Under Attack" : "Online",
      cpu: attackMode ? "91%" : "35%",
      ram: attackMode ? "82%" : "40%",
      network: attackMode ? "Critical" : "Healthy",
      location: "Campus Data Center",
    },
    {
      name: "🖥️ Private Server",
      status: attackMode ? "High Load" : "Online",
      cpu: attackMode ? "88%" : "42%",
      ram: attackMode ? "79%" : "45%",
      network: attackMode ? "Warning" : "Healthy",
      location: "Server Room A",
    },
    {
      name: "🗄️ Database",
      status: attackMode ? "Compromised" : "Healthy",
      cpu: attackMode ? "95%" : "58%",
      ram: attackMode ? "90%" : "61%",
      network: attackMode ? "Critical" : "Healthy",
      location: "Database Cluster",
    },
    {
      name: "☁️ Cloud",
      status: "Connected",
      cpu: "30%",
      ram: "37%",
      network: "Connected",
      location: "Azure Cloud",
    },
    {
      name: "🔒 VPN Gateway",
      status: "Active",
      cpu: attackMode ? "62%" : "21%",
      ram: attackMode ? "55%" : "28%",
      network: attackMode ? "Busy" : "Healthy",
      location: "Edge Network",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Hybrid Network Topology
      </h2>

      <div className="grid grid-cols-5 gap-4">

        {devices.map((device, index) => (

          <div
            key={index}
            onClick={() => setSelectedDevice(device)}
            className="cursor-pointer bg-slate-700 hover:bg-cyan-700 transition rounded-lg p-4 text-center"
          >
            <h3 className="font-bold">{device.name}</h3>

            <p
              className={`mt-2 ${
                device.status === "Online" ||
                device.status === "Healthy" ||
                device.status === "Connected" ||
                device.status === "Active"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {device.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NetworkMap;