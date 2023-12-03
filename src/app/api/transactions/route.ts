import { prisma } from '@/libs/db';
import { TType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));

  const transactions = await prisma.transaction.findMany({
    where: { userId: Number(id) },
  });

  if (!transactions) {
    throw new Error('Something went wrong');
  }

  const currentBal = transactions.reduce((balance, transaction) => {
    return transaction.type === 'DEPOSIT'
      ? balance + Number(transaction.amount)
      : balance - Number(transaction.amount);
  }, 0);

  const { totalBonus, totalDeposits } = transactions.reduce(
    (totals, transaction) => {
      if (transaction.type === TType.DEPOSIT) {
        totals.totalDeposits += Number(transaction.amount);
        totals.totalBonus += Number(transaction.bouns) || 0;
      }
      return totals;
    },
    { totalBonus: 0, totalDeposits: 0 }
  );

  const recentTransactions = await prisma.transaction.findMany({
    where: { id },
    take: 10,
    select: { amount: true, status: true, type: true },
  });

  return NextResponse.json(
    {
      data: {
        balance: currentBal,
        bonus: totalBonus,
        deposits: totalDeposits,
        recentTransactions,
      },
    },
    { status: 200 }
  );
}
