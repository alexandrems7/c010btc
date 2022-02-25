/*
  Warnings:

  - The `numerosDaCartela` column on the `Cartela` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cartela" DROP COLUMN "numerosDaCartela",
ADD COLUMN     "numerosDaCartela" TEXT[];
