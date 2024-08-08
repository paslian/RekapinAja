import React from "react";
import CreatePemasukanForm from "@/app/components/create-pemasukan-form";
const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Pemasukan Bulanan</h1>
      <CreatePemasukanForm />
    </div>
  );
};

export default page;
