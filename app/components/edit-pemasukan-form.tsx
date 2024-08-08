"use client";
import { updatePemasukan } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitBtn } from "./buttons";
import type { Pemasukan } from "@prisma/client";

const EditPemasukanForm = ({ pemasukan }: { pemasukan: Pemasukan }) => {
  const UpdatePemasukanWithID = updatePemasukan.bind(null, pemasukan.id);
  const [state, formAction] = useFormState(UpdatePemasukanWithID, null);
  return (
    <div>
      <form action={formAction} className="w-full flex flex-col">
        <h1 className="mb-1">Nama Pemasukan</h1>
        <input
          name="nama"
          type="text"
          placeholder="Masukkan Nama Pemasukan"
          className="input input-bordered w-full mb-3"
          defaultValue={pemasukan.nama}
          required
        />
        <h1 className="mb-1">Besaran (Rp)</h1>
        <input
          name="besaran"
          type="number"
          placeholder="Berapa besar pemasukannya?"
          className="input input-bordered w-full mb-3"
          defaultValue={pemasukan.besaran}
          required
        />
        {/* <h1 className="mb-1">Tanggal Pemasukan</h1>
        <input
          type="datetime-local"
          className="input input-bordered w-full mb-3"
          required
        /> */}
        <SubmitBtn label="Update" />
      </form>
    </div>
  );
};

export default EditPemasukanForm;
