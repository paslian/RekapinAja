import EditPemasukanForm from "@/app/components/edit-pemasukan-form";
import { getPemasukanById } from "@/lib/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const pemasukan = await getPemasukanById(id);
  if (!pemasukan) {
    notFound();
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Pemasukan Bulanan</h1>
      <EditPemasukanForm pemasukan={pemasukan} />
    </div>
  );
};

export default page;
