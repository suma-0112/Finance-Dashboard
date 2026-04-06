import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#4CAF50", "#FF6384", "#36A2EB", "#FFCE56"];

const ChartSection = ({ data }) => {
  const grouped = Object.values(
    data.reduce((acc, curr) => {
      if (curr.type === "expense") {
        acc[curr.category] = acc[curr.category] || {
          category: curr.category,
          amount: 0,
        };
        acc[curr.category].amount += curr.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="mb-2 font-semibold">Spending Breakdown</h2>

      {grouped.length === 0 ? (
        <p>No expense data</p>
      ) : (
        <PieChart width={300} height={250}>
          <Pie data={grouped} dataKey="amount" nameKey="category">
            {grouped.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default ChartSection;