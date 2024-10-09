'use client';

import { useState, type PropsWithChildren } from 'react';
import { AppContextProvider } from '@/context/app.context';

const Layout = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<string | undefined>(undefined);
  return (
    <AppContextProvider value={{ activeNav: active, setActiveNav: setActive }}>
      <div className="relative flex flex-col">
        <main className="bg-background mx-auto w-full grow text-clip">
          <div className="min-h-screen pb-8">{children}</div>
        </main>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
