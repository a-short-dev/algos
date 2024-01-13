import { prisma } from '@/libs/db';
import { TStatus, TType } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body: {
    amount: number;
    bonus: number;
  } = await req.json();
  const id = Number(cookies().get('userToken')?.value || 0);

  const topUp = await prisma.transaction.create({
    data: {
      amount: body.amount,
      bouns: body.bonus,
      type: TType.DEPOSIT,
      status: TStatus.PENDING,
      userId: id,
    },
  });

  if (!topUp) {
    return NextResponse.json({ status: 'Transaction Failed' }, { status: 400 });
  }

  return NextResponse.json({ status: 'Deposit successful' }, { status: 200 });
}
