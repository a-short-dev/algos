import { prisma } from '@/libs/db';
import { TStatus, TType } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body: {
    amount: number;
    type: TType;
    id: number;
  } = await req.json();

  const transactions = await prisma.transaction.findMany({
    where: { userId: Number(body.id) },
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
      type: body.type,
      status: TStatus.COMPLETED,
      userId: body.id,
    },
  });


  if (!withdraw) {
    return NextResponse.json({ status: 'Transaction Failed' }, { status: 400 });
  }

  return NextResponse.json({ status: 'Sub successful' }, { status: 200 });
}
