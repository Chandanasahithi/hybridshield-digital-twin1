function StatusCard({ title, value, color }) {
  return (
    <div className="bg-white border border-[#d9e5ec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

      {/* Title */}
      <p className="text-sm font-semibold text-[#567c8e]">
        {title}
      </p>

      {/* Value */}
      <p className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </p>

      {/* Bottom Indicator */}
      <div className="mt-4 h-1 rounded-full bg-[#e8f0f4]">
        <div className="h-1 w-2/3 rounded-full bg-[#a2c1d1]"></div>
      </div>

    </div>
  );
}

export default StatusCard;