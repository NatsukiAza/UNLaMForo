/*
  Warnings:

  - A unique constraint covering the columns `[anonymousId]` on the table `Posteo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Posteo_anonymousId_key` ON `Posteo`(`anonymousId`);
