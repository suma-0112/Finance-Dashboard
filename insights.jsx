const Insights = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  if (expenses.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <p>No insights available</p>
      </div>
    );
  }

  const highest = expenses.reduce((max, curr) =>
    curr.amount > max.amount ? curr : max
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Insights</h2>
      <p>
        💡 Highest Spending: <b>{highest.category}</b> (₹{highest.amount})
      </p>
    </div>
  );
};

export default Insights;