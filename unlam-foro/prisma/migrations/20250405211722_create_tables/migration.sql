-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_name_key`(`name`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posteo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `upvotes` INTEGER NOT NULL DEFAULT 0,
    `donwvotes` INTEGER NOT NULL DEFAULT 0,
    `titulo` VARCHAR(255) NOT NULL,
    `contenido` VARCHAR(5000) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarioId` INTEGER NOT NULL,
    `comisionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materia` (
    `codigo` INTEGER NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `año` VARCHAR(7) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comision` (
    `id` INTEGER NOT NULL,
    `profes` VARCHAR(300) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `materiaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posteo` ADD CONSTRAINT `Posteo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posteo` ADD CONSTRAINT `Posteo_comisionId_fkey` FOREIGN KEY (`comisionId`) REFERENCES `Comision`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comision` ADD CONSTRAINT `Comision_materiaId_fkey` FOREIGN KEY (`materiaId`) REFERENCES `Materia`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
