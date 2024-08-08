import Link from "next/link";
import { getPengeluarans } from "@/lib/data";
import { format } from "date-fns";
import { CreatePengeluaranBtn } from "../components/buttons";

const Page = async () => {
  const pengeluarans = await getPengeluarans();

  const pengeluaranByMonth = pengeluarans.reduce((acc, pengeluaran) => {
    const month = format(new Date(pengeluaran.tanggal), "MMMM yyyy");
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += pengeluaran.harga;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <h1 className="text-2xl font-bold mb-4">Pengeluaran Bulanan</h1>
        <CreatePengeluaranBtn />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
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
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(pengeluaranByMonth).map(([month, total], index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {month}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {`Rp ${total.toLocaleString()}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  <Link href={`/pengeluaran/${month}`}>Detail</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
