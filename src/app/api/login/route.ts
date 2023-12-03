import { prisma } from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Roles } from '@prisma/client';

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = body.password === user.password;

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }
    const data = {
      userId: user.id,
      role: user.role,
    };
    if (data.role === Roles.USER) {
      cookies().set('userToken', `${data.userId}`, {
        maxAge: 60 * 60,
        path: '/',
      });
    } else {
      cookies().set('adminToken', `${data.userId}`, {
        maxAge: 60 * 60,
        path: '/',
      });
    }
    return NextResponse.json(
      { message: 'success', data: data },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.message === 'Invalid credentials') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Oops! something went wrong' },
      { status: 500 }
    );
  }
}
