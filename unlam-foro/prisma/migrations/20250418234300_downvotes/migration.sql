/*
  Warnings:

  - You are about to drop the column `donwvotes` on the `Posteo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Posteo` DROP COLUMN `donwvotes`,
    ADD COLUMN `downvotes` INTEGER NOT NULL DEFAULT 0;
