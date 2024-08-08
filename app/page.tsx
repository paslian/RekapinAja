import { getPemasukans, getPengeluarans } from "@/lib/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

interface Pengeluaran {
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  tanggal: Date;
}

const Home = async () => {
  const pengeluarans: Pengeluaran[] = await getPengeluarans();
  const pemasukans = await getPemasukans();
  const session = await getServerSession(authOptions);

  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  const pengeluaransHariIni = pengeluarans.filter(
    (pengeluaran) =>
      pengeluaran.tanggal >= startOfDay && pengeluaran.tanggal < endOfDay
  );

  const pemasukansHariIni = pemasukans.filter(
    (pemasukan) =>
      new Date(pemasukan.tanggal) >= startOfDay &&
      new Date(pemasukan.tanggal) < endOfDay
  );

  const totalPengeluaranPerKategori: Record<string, number> =
    pengeluaransHariIni.reduce((acc, pengeluaran) => {
      if (acc[pengeluaran.kategori]) {
        acc[pengeluaran.kategori] += pengeluaran.harga;
      } else {
        acc[pengeluaran.kategori] = pengeluaran.harga;
      }
      return acc;
    }, {} as Record<string, number>);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {" "}
        {`Halo ${session?.user?.name || "User"}, yuk rekap hari ini!`}
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-xl font-semibold mb-4">Rekap Hari Ini</h1>
        <p className="text-gray-600">
          Total Pengeluaran Hari ini: Rp{" "}
          {pengeluaransHariIni
            .reduce((total, item) => total + item.harga, 0)
            .toLocaleString()}
        </p>
        <p className="text-gray-600">
          Total Pemasukan Hari ini: Rp{" "}
          {pemasukansHariIni
            .reduce((total, item) => total + item.besaran, 0)
            .toLocaleString()}
        </p>
      </div>

      <div className="bg-red-300 shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-3">Pengeluaran Hari Ini</h3>
        <ul className="space-y-3">
          {Object.entries(totalPengeluaranPerKategori).map(
            ([kategori, total]) => (
              <li
                key={kategori}
                className="flex justify-between p-2 bg-white rounded-md shadow-sm"
              >
                <span className="md:whitespace-normal md:w-auto truncate w-40">
                  {kategori}
                </span>
                <span>{`Rp ${total.toLocaleString()}`}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="bg-green-300 shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Pemasukan Hari Ini</h3>
        <ul className="space-y-3">
          {pemasukansHariIni.map((pemasukan) => (
            <li
              key={pemasukan.id}
              className="flex justify-between p-2 bg-white rounded-md shadow-sm"
            >
              <span>{pemasukan.nama}</span>
              <span>{`Rp ${pemasukan.besaran.toLocaleString()}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
