import { getPemasukans } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { CreatePemasukanBtn } from "../components/buttons";

const Page = async () => {
  const pemasukans = await getPemasukans();

  const pemasukansByMonth = pemasukans.reduce((acc, pemasukan) => {
    const month = format(new Date(pemasukan.tanggal), "MMMM yyyy");
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += pemasukan.besaran;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <h1 className="text-2xl font-bold mb-4">Pemasukan Bulanan</h1>
        <CreatePemasukanBtn />
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-300">
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
            {Object.entries(pemasukansByMonth).map(([month, total], index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {month}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {`Rp ${total.toLocaleString()}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  <Link href={`/pemasukan/${month}`}>Detail</Link>
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
