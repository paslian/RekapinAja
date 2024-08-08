"use server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PengeluaranSchema = z.object({
  nama: z.string().min(2),
  kategori: z.string().min(1),
  harga: z.number().int().min(1),
});

const PemasukanSchema = z.object({
  nama: z.string().min(2),
  besaran: z.number().int().min(1),
});

export const savePengeluaran = async (prevState: any, formData: FormData) => {
  const dataEntries = Object.fromEntries(formData.entries());
  const data = {
    ...dataEntries,
    harga: Number(dataEntries.harga),
  };
  const validatedFields = PengeluaranSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.pengeluaran.create({
      data: {
        nama: validatedFields.data.nama,
        kategori: validatedFields.data.kategori,
        harga: validatedFields.data.harga,
      },
    });
  } catch (error) {
    return { message: "Failed to create Pengeluaran" };
  }
  revalidatePath("/pengeluaran");
  redirect("/pengeluaran");
};

export const savePemasukan = async (prevState: any, formData: FormData) => {
  const dataEntries = Object.fromEntries(formData.entries());
  const data = {
    ...dataEntries,
    besaran: Number(dataEntries.besaran),
  };
  const validatedFields = PemasukanSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.pemasukan.create({
      data: {
        nama: validatedFields.data.nama,
        besaran: validatedFields.data.besaran,
      },
    });
  } catch (error) {
    return { message: "Failed to create Pemasukan" };
  }
  revalidatePath("/pemasukan");
  redirect("/pemasukan");
};

export const updatePengeluaran = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const dataEntries = Object.fromEntries(formData.entries());
  const data = {
    ...dataEntries,
    harga: Number(dataEntries.harga),
  };
  const validatedFields = PengeluaranSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.pengeluaran.update({
      data: {
        nama: validatedFields.data.nama,
        kategori: validatedFields.data.kategori,
        harga: validatedFields.data.harga,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update Pengeluaran" };
  }
  revalidatePath("/pengeluaran");
  redirect("/pengeluaran");
};

export const updatePemasukan = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const dataEntries = Object.fromEntries(formData.entries());
  const data = {
    ...dataEntries,
    besaran: Number(dataEntries.besaran),
  };
  const validatedFields = PemasukanSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.pemasukan.update({
      data: {
        nama: validatedFields.data.nama,
        besaran: validatedFields.data.besaran,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update Pemasukan" };
  }
  revalidatePath("/pemasukan");
  redirect("/pemasukan");
};

export const deletePengeluaran = async (id: string) => {
  try {
    await prisma.pengeluaran.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete Pengeluaran" };
  }
  revalidatePath("/pengeluaran");
};

export const deletePemasukan = async (id: string) => {
  try {
    await prisma.pemasukan.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete Pengeluaran" };
  }
  revalidatePath("/pengeluaran");
};
