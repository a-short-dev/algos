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
    if (transaction.type === 'DEPOSIT') {
      return balance + Number(transaction.amount) + Number(transaction.bouns || 0);
    } else if (transaction.type === 'SUBTRACT') {
      return balance - Number(transaction.amount);
    } else {
      // Handle other transaction types if needed
      return balance;
    }
  }, 0)

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
    where: { userId: id },
    take: 4,
    orderBy: { createdAt: 'desc' },
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
