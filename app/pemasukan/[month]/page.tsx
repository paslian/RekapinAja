import { getPemasukans } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { format } from "date-fns";
import {
  EditPemasukanBtn,
  DeletePemasukanBtn,
  CreatePemasukanBtn,
} from "@/app/components/buttons";

interface iPemasukan {
  params: {
    month: string;
  };
}

const page: React.FC<iPemasukan> = async ({ params }) => {
  const month = decodeURIComponent(params.month);
  const pemasukans = await getPemasukans();
  const filteredPemasukans = pemasukans.filter((pemasukan) => {
    const formattedDate = format(new Date(pemasukan.tanggal), "MMMM yyyy");
    return formattedDate === month;
  });

  const totalAmount = filteredPemasukans.reduce(
    (total, pemasukan) => total + pemasukan.besaran,
    0
  );
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          Rekap Pemasukan {month}
        </h1>
        <CreatePemasukanBtn />
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Besaran
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPemasukans.map((pemasukan, index) => (
              <tr key={pemasukan.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pemasukan.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pemasukan.besaran}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(pemasukan.tanggal.toString())}
                </td>
                <td className="flex justify-center gap-1 py-3 text-gray-500">
                  <EditPemasukanBtn id={pemasukan.id} />
                  <DeletePemasukanBtn id={pemasukan.id} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 ">
            <tr>
              <td
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                colSpan={4}
              >
                Total
              </td>
              <td
                className="px-6 py-4 text-right text-xs font-medium text-gray-900"
                colSpan={2}
              >
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
