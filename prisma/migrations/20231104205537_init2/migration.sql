/*
  Warnings:

  - Made the column `phoneNumber` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `phoneNumber` INTEGER NOT NULL DEFAULT 0;
