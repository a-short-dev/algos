import { prisma } from '@/libs/db';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const userId = cookies().get('userToken');
  if (userId) {
    //console.log(url);
    const transactions = await prisma.transaction.findMany({
      where: { userId: Number(userId) },
    });

    const currentBal = transactions.reduce((balance, transaction) => {
      return transaction.type === 'DEPOSIT'
        ? balance
        : balance - Number(transaction.amount);
    }, 0);

    return NextResponse.json({ data: currentBal });
  } else return NextResponse.json({ error: 'User not found' }, { status: 401 });
}
