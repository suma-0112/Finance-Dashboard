import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions, search, setSearch } = useContext(AppContext);

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500">No transactions found</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td
                  className={
                    t.type === "income" ? "text-green-600" : "text-red-500"
                  }
                >
                  {t.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;