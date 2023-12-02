import { prisma } from '@/libs/db';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    select: { firstName: true, lastName: true },
  });
  return NextResponse.json({ user }, { status: 200 });
}
