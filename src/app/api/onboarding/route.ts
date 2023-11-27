import { prisma } from '@/libs/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await prisma.user.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Oops! something went wrong' },
      { status: 500 }
    );
  }
}
