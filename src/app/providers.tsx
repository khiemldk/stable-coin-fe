'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import store from '@/stores';
import { NextUIProvider } from '@nextui-org/system';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { WagmiProvider } from 'wagmi';

import { config } from '@/lib/config';
import queryClient from '@/lib/queryClient';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
            <Toaster position="top-right" richColors />
          </NextUIProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}
