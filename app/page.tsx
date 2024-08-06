import Link from "next/link";

const Home = () => {
  const expenses = [
    { id: 1, name: "Lunch", amount: "Rp 50,000" },
    { id: 2, name: "Transportation", amount: "Rp 20,000" },
    { id: 3, name: "Coffee", amount: "Rp 15,000" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Rekapinaja</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Today's Overview</h2>
        <p className="text-gray-600">
          Here is a summary of your expenses for today.
        </p>
      </div>

      <div className="bg-gray-100 shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Expenses for Today</h3>
        <ul className="space-y-3">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between p-2 bg-white rounded-md shadow-sm"
            >
              <span>{expense.name}</span>
              <span>{expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
