import { prisma } from '@/libs/db';
import { Roles } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { confirmPassword, ...newBody } = body;
  try {
    const user = await prisma.user.create({
      data: {
        ...newBody,
        role: Roles.USER,
        username: body.email,
      },
    });
    return NextResponse.json({ message: 'success', data: user.id });
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
