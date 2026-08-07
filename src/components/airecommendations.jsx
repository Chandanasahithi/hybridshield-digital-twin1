function AIRecommendations({ attackMode }) {
  const normalRecommendations = [
    "Firewall operating normally",
    "VPN tunnel is secure",
    "No abnormal traffic detected",
    "All systems are healthy",
  ];

  const attackRecommendations = [
    "Enable Multi-Factor Authentication",
    "Block suspicious IP addresses",
    "Isolate the Private Server",
    "Scan Database for Malware",
    "Increase Firewall Rules",
    "Review IAM permissions",
  ];

  const recommendations = attackMode
    ? attackRecommendations
    : normalRecommendations;

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🤖 AI Security Recommendations
      </h2>

      {recommendations.map((item, index) => (
        <div
          key={index}
          className="bg-slate-700 p-4 rounded-lg mb-3"
        >
          {attackMode ? "⚠️" : "✅"} {item}
        </div>
      ))}

    </div>
  );
}

export default AIRecommendations;