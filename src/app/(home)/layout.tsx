import React from 'react';

const getUserDetails = async () => {};
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  getUserDetails()
  return <section>{children}</section>;
}
