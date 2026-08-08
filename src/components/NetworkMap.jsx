import { useState } from "react";

function NetworkMap({ attackMode, setSelectedDevice }) {
  const [selected, setSelected] = useState(null);

  const infrastructure = [
    {
      id: "firewall",
      icon: "🔥",
      name: "Firewall",
      status: attackMode ? "Warning" : "Online",
      color: attackMode ? "text-red-600" : "text-green-600",
      description:
        "The firewall monitors incoming and outgoing traffic and blocks suspicious network connections.",
      details: [
        ["Status", attackMode ? "Suspicious Traffic Detected" : "Operational"],
        ["Traffic Filtering", "Active"],
        ["Blocked Connections", attackMode ? "24" : "8"],
        ["Threat Prevention", "Enabled"],
        ["Last Scan", "2 minutes ago"],
      ],
    },
    {
      id: "datacenter",
      icon: "🖥️",
      name: "Private Data Center",
      status: "Online",
      color: "text-green-600",
      description:
        "Private infrastructure containing protected servers and internal data center resources.",
      details: [
        ["Servers", "12"],
        ["CPU Usage", "42%"],
        ["Memory Usage", "61%"],
        ["Encryption", "Enabled"],
        ["Availability", "99.9%"],
      ],
    },
    {
      id: "database",
      icon: "🗄️",
      name: "Database",
      status: "Healthy",
      color: "text-green-600",
      description:
        "Protected database infrastructure storing critical hybrid data center information.",
      details: [
        ["Status", "Healthy"],
        ["Connections", "38"],
        ["Encryption", "AES-256"],
        ["Backup", "Enabled"],
        ["Last Backup", "Today, 09:42 AM"],
      ],
    },
    {
      id: "cloud",
      icon: "☁️",
      name: "Hybrid Cloud",
      status: "Connected",
      color: "text-green-600",
      description:
        "Hybrid cloud connection used for monitored and controlled cloud infrastructure.",
      details: [
        ["Provider", "Azure Cloud"],
        ["Connection", "Secure"],
        ["Cloud Resources", "18"],
        ["Encryption", "Enabled"],
        ["Sync Status", "Active"],
      ],
    },
    {
      id: "vpn",
      icon: "🔒",
      name: "VPN Gateway",
      status: "Active",
      color: "text-green-600",
      description:
        "Secure VPN gateway providing encrypted communication between the private data center and external networks.",
      details: [
        ["Status", "Active"],
        ["Encryption", "AES-256"],
        ["Connected Users", "14"],
        ["Authentication", "Multi-Factor"],
        ["Tunnel Status", "Secure"],
      ],
    },
  ];

  const handleSelect = (device) => {
    setSelected(device);

    if (setSelectedDevice) {
      setSelectedDevice(device);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#c7d9e5]">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2f4157]">
          Hybrid Network Topology
        </h2>

        <p className="text-[#567c8e] mt-1">
          Digital representation of the hybrid data center infrastructure
        </p>
      </div>

      {/* Network Nodes */}

      <div className="bg-[#2f4157] rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-[#a2c1d1] mb-6">
          Hybrid Infrastructure
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {infrastructure.map((device) => (

            <button
              key={device.id}
              onClick={() => handleSelect(device)}
              className={`rounded-xl p-5 text-center
                bg-[#3b5068]
                border border-[#567c8e]
                hover:bg-[#567c8e]
                hover:scale-105
                transition-all duration-300
                ${
                  selected?.id === device.id
                    ? "ring-2 ring-[#a2c1d1]"
                    : ""
                }
              `}
            >

              <div className="text-3xl mb-3">
                {device.icon}
              </div>

              <h4 className="font-bold text-white text-sm">
                {device.name}
              </h4>

              <p className={`mt-3 font-semibold ${device.color}`}>
                ● {device.status}
              </p>

              <p className="text-[#c7d9e5] text-xs mt-2">
                Click for details
              </p>

            </button>

          ))}

        </div>
      </div>

      {/* Selected Device Information */}

      {selected && (

        <div className="mt-6 bg-[#f3f6f9] rounded-2xl p-6 border border-[#c7d9e5]">

          <div className="flex items-center gap-4 mb-5">

            <div className="text-4xl">
              {selected.icon}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2f4157]">
                {selected.name}
              </h3>

              <p className={`font-semibold ${selected.color}`}>
                ● {selected.status}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="ml-auto text-[#567c8e] hover:text-[#2f4157] text-xl"
            >
              ✕
            </button>

          </div>

          <p className="text-[#567c8e] mb-6">
            {selected.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            {selected.details.map(([label, value]) => (

              <div
                key={label}
                className="bg-white rounded-xl p-4 border border-[#c7d9e5]"
              >

                <p className="text-sm text-[#567c8e]">
                  {label}
                </p>

                <p className="font-bold text-[#2f4157] mt-2">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}

export default NetworkMap;