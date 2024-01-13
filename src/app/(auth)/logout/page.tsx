import { cookies } from 'next/headers';

export default async function LogoutPage() {
  cookies().delete('userToken');
  cookies().delete('adminToken');
  return <div></div>;
}
