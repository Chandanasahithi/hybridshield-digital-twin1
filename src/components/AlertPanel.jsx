function AlertPanel({ attackMode }) {
  const normalLogs = [
    {
      time: "10:00",
      message: "VPN connected successfully",
      level: "Low",
    },
    {
      time: "10:15",
      message: "Firewall rules updated",
      level: "Medium",
    },
    {
      time: "10:30",
      message: "User login authenticated",
      level: "Low",
    },
  ];

  const attackLogs = [
    {
      time: "10:31",
      message: "Unauthorized login detected",
      level: "High",
    },
    {
      time: "10:32",
      message: "Firewall under heavy traffic",
      level: "Critical",
    },
    {
      time: "10:33",
      message: "Database access blocked",
      level: "Critical",
    },
    {
      time: "10:34",
      message: "AI isolated suspicious server",
      level: "High",
    },
  ];

  const logs = attackMode ? attackLogs : normalLogs;

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Live Security Activity
      </h2>

      {logs.map((log, index) => (
        <div
          key={index}
          className="flex justify-between border-b border-slate-700 py-3"
        >
          <div>
            <p className="font-semibold">{log.message}</p>
            <p className="text-gray-400 text-sm">{log.time}</p>
          </div>

          <span
            className={`font-bold ${
              log.level === "Critical"
                ? "text-red-500"
                : log.level === "High"
                ? "text-orange-400"
                : "text-yellow-400"
            }`}
          >
            {log.level}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AlertPanel;