import { prisma } from '@/libs/db';
import { TStatus } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

export async function Handler(req: Request) {
  const { method } = req;
  const { searchParams } = new URL(req.url);
  const body = await req.json();
  if (method === 'GET' && body.method === 'getTransactions') {
    const userId = searchParams.get('id');
    try {
      const tx = await prisma.transaction.findMany({
        where: { userId: Number(userId) },
        select: {
          amount: true,
          status: true,
        },
      });
      return NextResponse.json({ transactions: tx }, { status: 200 });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
      }
    }
  }

  if (method === 'POST' && body.method === 'createTransaction') {
    {
      /**
  const createT = await prisma.transaction.create({
      data: {
        status: TStatus.COMPLETED,
        userId: body.userId,
        amount: body.amount,
      },
    }); */
    }
  }
}
