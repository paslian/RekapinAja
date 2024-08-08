export const TableSkeleton = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-red-300">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Bulan
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 animate-pulse">
        <tr className="border-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
