import { prisma } from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { method } = req;

  const user = await prisma.user.findFirst({
    where: { id: 1 },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      
    },
  });
  return NextResponse.json({ user }, { status: 200 });
}
