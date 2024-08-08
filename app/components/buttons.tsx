"use client";

import React from "react";
import Link from "next/link";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deletePengeluaran, deletePemasukan } from "@/lib/actions";

export const EditPengeluaranBtn = ({ id }: { id: string }) => {
  return (
    <Link href={`/pengeluaran/edit/${id}`} className="rounded-sm border p-1">
      <IoPencil size={20} />
    </Link>
  );
};

export const EditPemasukanBtn = ({ id }: { id: string }) => {
  return (
    <Link href={`/pemasukan/edit/${id}`} className="rounded-sm border p-1">
      <IoPencil size={20} />
    </Link>
  );
};

export const DeletePengeluaranBtn = ({ id }: { id: string }) => {
  const DeletePengeluaranWithId = deletePengeluaran.bind(null, id);
  return (
    <form action={DeletePengeluaranWithId} className="flex">
      <button className="rounded-sm border p-1">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const DeletePemasukanBtn = ({ id }: { id: string }) => {
  const DeletePemasukanWithId = deletePemasukan.bind(null, id);
  return (
    <form action={DeletePemasukanWithId} className="flex">
      <button className="rounded-sm border p-1">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const CreatePemasukanBtn = () => {
  return (
    <Link href="/pemasukan/tambah" className="btn btn-active btn-primary mb-2">
      Tambah
    </Link>
  );
};

export const CreatePengeluaranBtn = () => {
  return (
    <Link
      href="/pengeluaran/tambah"
      className="btn btn-active btn-primary mb-2"
    >
      Tambah
    </Link>
  );
};

export const SubmitBtn = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx("btn btn-active btn-primary", {
    "opacity-20 cursor-progress": pending,
  });
  return (
    <button className={className} disabled={pending}>
      {label === "Submit" ? (
        <span>{pending ? "Saving..." : "Submit"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
