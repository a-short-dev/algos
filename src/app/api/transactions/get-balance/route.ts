import { prisma } from '@/libs/db';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  //console.log(url);
  const transactions = await prisma.transaction.findMany({
    where: { userId: Number(id) },
  });

  const currentBal = transactions.reduce((balance, transaction) => {
    return transaction.type === 'DEPOSIT'
      ? balance + Number(transaction.amount)
      : balance - Number(transaction.amount);
  }, 0);

  if (currentBal) {
    return NextResponse.json({ currentBal }, { status: 200 });
  }

  if (!currentBal) {
    return NextResponse.json({ error: 'An error occured' }, { status: 500 });
  }
}
