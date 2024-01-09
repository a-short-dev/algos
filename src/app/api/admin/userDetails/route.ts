import { prisma } from '@/libs/db';
import { TType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error('something went wrong');
  }

  const transactions = await prisma.transaction.findMany({
    where: { userId: Number(id) },
  });

  if (!transactions) {
    throw new Error('Something went wrong');
  }

  const currentBal = transactions.reduce((balance, transaction) => {
    return transaction.type === 'DEPOSIT'
      ? balance + Number(transaction.amount) + Number(transaction.bouns || 0)
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

  return NextResponse.json(
    { data: { user, currentBal, totalBonus, totalDeposits } },
    { status: 200 }
  );
}
