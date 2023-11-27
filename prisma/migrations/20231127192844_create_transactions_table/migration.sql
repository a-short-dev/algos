-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Super', 'Administrator', 'User');

-- CreateEnum
CREATE TYPE "TStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "transations" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "transRef" VARCHAR(30) NOT NULL,
    "status" "TStatus" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currBal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "prevBal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "transations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "role" "Roles" NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "phone_number" CHAR(20) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "is_suspended" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "role" "Roles" NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "phone_number" CHAR(20) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "is_suspended" BOOLEAN NOT NULL DEFAULT false,
    "is_super_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admins_phone_number_key" ON "admins"("phone_number");

-- AddForeignKey
ALTER TABLE "transations" ADD CONSTRAINT "transations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
