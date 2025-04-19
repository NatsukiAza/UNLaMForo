/*
  Warnings:

  - You are about to drop the column `downvotes` on the `Posteo` table. All the data in the column will be lost.
  - You are about to drop the column `upvotes` on the `Posteo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Posteo` DROP COLUMN `downvotes`,
    DROP COLUMN `upvotes`;

-- CreateTable
CREATE TABLE `Vote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,

    UNIQUE INDEX `Vote_userId_postId_key`(`userId`, `postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Posteo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
