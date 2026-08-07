import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", cpu: 22 },
  { time: "10:05", cpu: 35 },
  { time: "10:10", cpu: 42 },
  { time: "10:15", cpu: 38 },
  { time: "10:20", cpu: 55 },
  { time: "10:25", cpu: 48 },
];

function CpuChart() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        CPU Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CpuChart;