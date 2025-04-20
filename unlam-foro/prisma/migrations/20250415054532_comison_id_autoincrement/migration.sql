-- Paso 1: Eliminar la Foreign Key constraint existente en la tabla Posteo
ALTER TABLE `Posteo` DROP FOREIGN KEY `Posteo_comisionId_fkey`;

-- Paso 2: Modificar la columna 'id' en la tabla Comision para añadir AUTO_INCREMENT
-- (Asegúrate que esta línea coincida con lo que Prisma intentó hacer originalmente, 
-- cambiando solo lo necesario para añadir AUTO_INCREMENT si no estaba ya).
ALTER TABLE `Comision` MODIFY COLUMN `id` INT NOT NULL AUTO_INCREMENT;

-- Paso 3: Volver a crear la Foreign Key constraint en la tabla Posteo
ALTER TABLE `Posteo` ADD CONSTRAINT `Posteo_comisionId_fkey` FOREIGN KEY (`comisionId`) REFERENCES `Comision`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;