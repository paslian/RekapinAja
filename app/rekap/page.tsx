import React from "react";

const page = () => {
  const monthlyExpenses = [
    { id: 1, date: "2024-08-01", description: "Lunch", amount: "Rp 50,000" },
    {
      id: 2,
      date: "2024-08-02",
      description: "Transportation",
      amount: "Rp 20,000",
    },
    { id: 3, date: "2024-08-03", description: "Coffee", amount: "Rp 15,000" },
  ];

  const totalAmount = monthlyExpenses.reduce((total, expense) => {
    const amount = parseInt(expense.amount.replace(/[^0-9]/g, ""), 10);
    return total + amount;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rekap Pengeluaran Bulanan</h1>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {monthlyExpenses.map((expense) => (
              <tr key={expense.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {expense.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {expense.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {expense.amount}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 ">
            <tr>
              <td className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 text-right text-xs font-medium text-gray-900">
                {`Rp ${totalAmount.toLocaleString()}`}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default page;
