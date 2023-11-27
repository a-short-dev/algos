/*
  Warnings:

  - You are about to drop the column `transRef` on the `transations` table. All the data in the column will be lost.
  - The required column `trans_ref` was added to the `transations` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "transations" DROP COLUMN "transRef",
ADD COLUMN     "trans_ref" VARCHAR(30) NOT NULL,
ALTER COLUMN "amount" DROP DEFAULT,
ALTER COLUMN "currBal" DROP DEFAULT,
ALTER COLUMN "prevBal" DROP DEFAULT;

-- CreateTable
CREATE TABLE "wallets" (
    "id" SERIAL NOT NULL,
    "currenBal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "wallets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
