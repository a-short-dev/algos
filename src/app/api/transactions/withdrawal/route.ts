import { prisma } from '@/libs/db';
import { TStatus, TType } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body: {
    amount: number;
  } = await req.json();
  const id = Number(cookies().get('userToken')?.value || 0);

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

  const check = currentBal - body.amount;

  if (check < 0) {
    throw `insucffienct funds`;
  }

  const withdraw = await prisma.transaction.create({
    data: {
      amount: body.amount,
      type: TType.WITHDRAWAL,
      status: TStatus.PENDING,
      userId: id,
    },
  });
  console.log(withdraw);

  if (!withdraw) {
    return NextResponse.json({ status: 'Transaction Failed' }, { status: 400 });
  }

  return NextResponse.json(
    { status: 'Withdrawal successful' },
    { status: 200 }
  );
}
