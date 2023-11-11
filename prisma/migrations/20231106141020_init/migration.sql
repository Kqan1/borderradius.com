/*
  Warnings:

  - You are about to drop the column `ProfilePhoto` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `ProfilePhoto`,
    ADD COLUMN `profilePhoto` VARCHAR(191) NULL;
