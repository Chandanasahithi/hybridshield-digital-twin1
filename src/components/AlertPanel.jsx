function AlertPanel({ attackMode }) {
  const alerts = attackMode
    ? [
        {
          title: "Suspicious Login Attempt",
          description: "Multiple unauthorized authentication attempts detected.",
          severity: "HIGH",
        },
        {
          title: "Network Anomaly",
          description: "Unusual traffic pattern detected in the hybrid network.",
          severity: "HIGH",
        },
        {
          title: "Device Risk",
          description: "One monitored device requires immediate investigation.",
          severity: "MEDIUM",
        },
      ]
    : [
        {
          title: "Firewall Monitoring",
          description: "Firewall is operating normally.",
          severity: "LOW",
        },
        {
          title: "VPN Status",
          description: "VPN gateway is secure and operational.",
          severity: "LOW",
        },
      ];

  return (
    <div className="space-y-3">

      {alerts.map((alert, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-[#f3f6f9] border border-[#e3ecf2]"
        >

          <div className="flex items-start justify-between gap-4">

            <div>

              <h3 className="font-bold text-[#2f4157]">
                {alert.title}
              </h3>

              <p className="text-sm text-[#567c8e] mt-1">
                {alert.description}
              </p>

            </div>

            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                alert.severity === "HIGH"
                  ? "bg-red-100 text-red-700"
                  : alert.severity === "MEDIUM"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {alert.severity}
            </span>

          </div>

        </div>
      ))}

    </div>
  );
}

export default AlertPanel;