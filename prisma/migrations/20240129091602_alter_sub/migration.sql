-- AlterEnum
ALTER TYPE "TType" ADD VALUE 'SUBTRACT';

-- CreateTable
CREATE TABLE "wallet" (
    "wallet_id" TEXT NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "wallet_type" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("wallet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wallet_wallet_id_key" ON "wallet"("wallet_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_wallet_address_key" ON "wallet"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_wallet_type_key" ON "wallet"("wallet_type");
