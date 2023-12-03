import { prisma } from '@/libs/db';
import { Roles } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany({ where: { role: Roles.USER } });

  if (!users) {
    throw new Error('something went wrong');
  }

  return NextResponse.json({ data: users }, { status: 200 });
}
