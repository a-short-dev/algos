import { prisma } from '@/libs/db';
import { TStatus, TType } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const userId = cookies().get('userToken');

  const create = await prisma.transaction.create({
    data: {
      status: TStatus.PENDING,
      type: TType.DEPOSIT,
      amount: body.amount,
      userId: Number(userId),
    },
  });

  NextResponse.json({ message: 'deposit successful' }, { status: 200 });
}
