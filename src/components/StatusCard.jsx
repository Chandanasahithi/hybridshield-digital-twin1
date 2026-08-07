function StatusCard({ title, value, color }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
      <h2 className="text-gray-400 text-sm">{title}</h2>

      <p className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default StatusCard;