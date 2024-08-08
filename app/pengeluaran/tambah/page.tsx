import React from "react";
import CreatePengeluaranForm from "@/app/components/create-pengeluaran-form";

const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Pengeluaran Bulanan</h1>
      <CreatePengeluaranForm />
    </div>
  );
};

export default page;
