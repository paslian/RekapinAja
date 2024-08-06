import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Pengeluaran Bulanan</h1>
      <form className="w-full flex flex-col">
        <h1 className="mb-1">Nama Pengeluaran</h1>
        <input
          type="text"
          placeholder="Masukkan Nama Pengeluaran"
          className="input input-bordered w-full mb-3"
          required
        />
        <h1 className="mb-1">Kategori</h1>
        <select className="select select-bordered w-full mb-3" required>
          <option disabled selected>
            Apa Kategori Pengeluarannya?
          </option>
          <option>Makanan dan minuman</option>
          <option>Listrik, air, dan gas</option>
          <option>Biaya transportasi (bensin, ongkos kendaraan umum)</option>
          <option>Kesehatan (obat-obatan, asuransi kesehatan)</option>
          <option>Pakaian</option>
          <option>Pendidikan (biaya sekolah, kursus)</option>
          <option>Komunikasi (pulsa, paket data, wifi)</option>
          <option>Pembayaran cicilan kredit (mobil, barang elektronik)</option>
          <option>Hadiah atau sumbangan</option>
          <option>Lainnya</option>
        </select>
        <h1 className="mb-1">Harga</h1>
        <input
          type="number"
          placeholder="Berapa harganya"
          className="input input-bordered w-full mb-3"
          required
        />
        <h1 className="mb-1">Tanggal Pengeluaran</h1>
        <input
          type="datetime-local"
          className="input input-bordered w-full mb-3"
          required
        />
        <button className="btn btn-active btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default page;
