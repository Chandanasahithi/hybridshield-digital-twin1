import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", traffic: 120 },
  { name: "Tue", traffic: 180 },
  { name: "Wed", traffic: 150 },
  { name: "Thu", traffic: 210 },
  { name: "Fri", traffic: 170 },
];

function TrafficChart() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Network Traffic
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="traffic" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficChart;