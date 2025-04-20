/*
  Warnings:

  - You are about to drop the column `año` on the `Materia` table. All the data in the column will be lost.
  - Added the required column `anio` to the `Materia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Materia` DROP COLUMN `año`,
    ADD COLUMN `anio` INTEGER NOT NULL;
