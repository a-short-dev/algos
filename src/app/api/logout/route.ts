import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const userTokenCookie = cookies().get('userToken');
  const adminTokenCookie = cookies().get('adminToken');

  // Delete cookies
  if (userTokenCookie) {
    cookies().delete('userToken');
  }
  if (adminTokenCookie) {
    cookies().delete('adminToken');
  }

  redirect('/login');
}
