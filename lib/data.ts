import { prisma } from "@/lib/prisma";

export const getPengeluarans = async () => {
  try {
    const pengeluarans = await prisma.pengeluaran.findMany();
    return pengeluarans;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export const getPemasukans = async () => {
  try {
    const pemasukans = await prisma.pemasukan.findMany();
    return pemasukans;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export const getPengeluaranById = async (id: string) => {
  try {
    const pengeluarans = await prisma.pengeluaran.findUnique({
      where: { id },
    });
    return pengeluarans;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export const getPemasukanById = async (id: string) => {
  try {
    const pemasukans = await prisma.pemasukan.findUnique({
      where: { id },
    });
    return pemasukans;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};
