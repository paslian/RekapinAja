import EditPengeluaranForm from "@/app/components/edit-pengeluaran-form";
import { getPengeluaranById } from "@/lib/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const pengeluaran = await getPengeluaranById(id);
  if (!pengeluaran) {
    notFound();
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Pengeluaran Bulanan</h1>
      <EditPengeluaranForm pengeluaran={pengeluaran} />
    </div>
  );
};

export default page;
