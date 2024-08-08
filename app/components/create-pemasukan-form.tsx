"use client";
import React from "react";
import { savePemasukan } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitBtn } from "./buttons";

const CreatePemasukanForm = () => {
  const [state, formAction] = useFormState(savePemasukan, null);
  return (
    <div>
      <form action={formAction} className="w-full flex flex-col">
        <h1 className="mb-1">Nama Pemasukan</h1>
        <input
          name="nama"
          type="text"
          placeholder="Masukkan Nama Pemasukan"
          className="input input-bordered w-full mb-3"
          required
        />
        <h1 className="mb-1">Besaran (Rp)</h1>
        <input
          name="besaran"
          type="number"
          placeholder="Berapa besar pemasukannya?"
          className="input input-bordered w-full mb-3"
          required
        />
        {/* <h1 className="mb-1">Tanggal Pemasukan</h1>
        <input
          type="datetime-local"
          className="input input-bordered w-full mb-3"
          required
        /> */}
        <SubmitBtn label="Submit" />
      </form>
    </div>
  );
};

export default CreatePemasukanForm;
