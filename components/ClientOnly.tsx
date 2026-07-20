'use client';

import type { ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  return <>{children}</>;
};

export default ClientOnly;