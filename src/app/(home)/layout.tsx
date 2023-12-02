import React from 'react';

export default async function name({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
