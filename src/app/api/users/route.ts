import { prisma } from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new Error('something went wrong');
  }

  const { firstName, lastName, email } = user;
  return NextResponse.json(
    { data: { firstName, lastName, email } },
    { status: 200 }
  );
}
