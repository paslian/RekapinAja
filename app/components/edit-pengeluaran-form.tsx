"use client";
import { useFormState } from "react-dom";
import { updatePengeluaran } from "@/lib/actions";
import { SubmitBtn } from "./buttons";
import type { Pengeluaran } from "@prisma/client";

const EditPengeluaranForm = ({ pengeluaran }: { pengeluaran: Pengeluaran }) => {
  const UpdatePengeluaranWithID = updatePengeluaran.bind(null, pengeluaran.id);
  const [state, formAction] = useFormState(UpdatePengeluaranWithID, null);
  return (
    <div>
      <form action={formAction} className="w-full flex flex-col">
        <h1 className="mb-1">Nama Pengeluaran</h1>
        <input
          name="nama"
          id="nama"
          type="text"
          placeholder="Masukkan Nama Pengeluaran"
          className="input input-bordered w-full mb-3"
          defaultValue={pengeluaran.nama}
          required
        />
        <div className="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-w text-sm text-red-500">{state?.Error?.nama}</p>
        </div>
        <h1 className="mb-1">Kategori</h1>
        <select
          className="select select-bordered w-full mb-3"
          required
          name="kategori"
          id="kategori"
          defaultValue={pengeluaran.kategori}
        >
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
        <div className="kategori-error" aria-live="polite" aria-atomic="true">
          <p className="mt-w text-sm text-red-500">{state?.Error?.kategori}</p>
        </div>
        <h1 className="mb-1">Harga</h1>
        <input
          name="harga"
          id="harga"
          type="number"
          placeholder="Berapa harganya"
          className="input input-bordered w-full mb-3"
          defaultValue={pengeluaran.harga}
          required
        />
        <div className="harga-error" aria-live="polite" aria-atomic="true">
          <p className="mt-w text-sm text-red-500">{state?.Error?.harga}</p>
        </div>
        {/* <h1 className="mb-1">Tanggal Pengeluaran</h1>
        <input
          name="tanggal"
          type="datetime-local"
          className="input input-bordered w-full mb-3"
          required
        /> */}
        <div className="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-w text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitBtn label="Update" />
      </form>
    </div>
  );
};

export default EditPengeluaranForm;
