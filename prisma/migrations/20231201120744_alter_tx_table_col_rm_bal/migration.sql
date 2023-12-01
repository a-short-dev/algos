/*
  Warnings:

  - You are about to drop the column `bal` on the `transations` table. All the data in the column will be lost.
  - You are about to drop the column `bonus` on the `transations` table. All the data in the column will be lost.
  - You are about to drop the column `prev_bal` on the `transations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transations" DROP COLUMN "bal",
DROP COLUMN "bonus",
DROP COLUMN "prev_bal";
