import { getPengeluarans } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { format } from "date-fns";
import {
  EditPengeluaranBtn,
  DeletePengeluaranBtn,
  CreatePengeluaranBtn,
} from "@/app/components/buttons";

interface iPengeluaran {
  params: {
    month: string;
  };
}

const page: React.FC<iPengeluaran> = async ({ params }) => {
  const month = decodeURIComponent(params.month);
  const pengeluarans = await getPengeluarans();
  const filteredPengeluarans = pengeluarans.filter((pengeluaran) => {
    const formattedDate = format(new Date(pengeluaran.tanggal), "MMMM yyyy");
    return formattedDate === month;
  });

  const totalPengeluaranPerKategori: Record<string, number> =
    filteredPengeluarans.reduce((acc, pengeluaran) => {
      if (acc[pengeluaran.kategori]) {
        acc[pengeluaran.kategori] += pengeluaran.harga;
      } else {
        acc[pengeluaran.kategori] = pengeluaran.harga;
      }
      return acc;
    }, {} as Record<string, number>);

  const totalAmount = filteredPengeluarans.reduce(
    (total, pengeluaran) => total + pengeluaran.harga,
    0
  );
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <h3 className="text-2xl font-bold mb-4 md:mb-0">
          Rekap Pengeluaran {month}
        </h3>
        <CreatePengeluaranBtn />
      </div>
      <hr className="mb-3" />
      <h1 className="text-xl mb-4 text-center">Pengeluaran per Kategori</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto mb-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead></thead>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(totalPengeluaranPerKategori).map(
              ([kategori, total], index) => (
                <tr key={kategori}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {kategori}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {`Rp ${total.toLocaleString()}`}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <h1 className="text-xl mb-4 text-center">Detail</h1>
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
                Kategori
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga
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
            {filteredPengeluarans.map((pengeluaran, index) => (
              <tr key={pengeluaran.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pengeluaran.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pengeluaran.kategori}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {`Rp ${pengeluaran.harga.toLocaleString()}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(pengeluaran.tanggal.toString())}
                </td>
                <td className="flex justify-center gap-1 py-3 text-gray-500">
                  <EditPengeluaranBtn id={pengeluaran.id} />
                  <DeletePengeluaranBtn id={pengeluaran.id} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
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
