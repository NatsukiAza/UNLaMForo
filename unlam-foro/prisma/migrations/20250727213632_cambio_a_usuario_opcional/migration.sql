-- DropForeignKey
ALTER TABLE `Posteo` DROP FOREIGN KEY `Posteo_usuarioId_fkey`;

-- DropIndex
DROP INDEX `Posteo_usuarioId_fkey` ON `Posteo`;

-- AlterTable
ALTER TABLE `Posteo` MODIFY `usuarioId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Posteo` ADD CONSTRAINT `Posteo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
