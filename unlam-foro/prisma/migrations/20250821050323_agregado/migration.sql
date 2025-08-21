-- AlterTable
ALTER TABLE `Comision` MODIFY `profes` VARCHAR(300) NULL;

-- CreateIndex
CREATE INDEX `Comision_codigo_idx` ON `Comision`(`codigo`);

-- CreateIndex
CREATE INDEX `Materia_anio_idx` ON `Materia`(`anio`);

-- CreateIndex
CREATE INDEX `Posteo_comisionId_fecha_idx` ON `Posteo`(`comisionId`, `fecha`);

-- CreateIndex
CREATE INDEX `Posteo_fecha_idx` ON `Posteo`(`fecha`);

-- CreateIndex
CREATE INDEX `User_email_idx` ON `User`(`email`);

-- CreateIndex
CREATE INDEX `User_name_idx` ON `User`(`name`);

-- CreateIndex
CREATE INDEX `Vote_userId_idx` ON `Vote`(`userId`);

-- RenameIndex
ALTER TABLE `Comision` RENAME INDEX `Comision_materiaId_fkey` TO `Comision_materiaId_idx`;

-- RenameIndex
ALTER TABLE `Posteo` RENAME INDEX `Posteo_usuarioId_fkey` TO `Posteo_usuarioId_idx`;

-- RenameIndex
ALTER TABLE `Vote` RENAME INDEX `Vote_postId_fkey` TO `Vote_postId_idx`;
