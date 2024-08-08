-- CreateTable
CREATE TABLE "Pemasukan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "besaran" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pemasukan_pkey" PRIMARY KEY ("id")
);
