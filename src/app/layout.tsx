import type { Metadata } from 'next'
import { Syne } from 'next/font/google';
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from 'sonner';
import Providers from '@/lib/Providers/Providers';
const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ContactHub',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 <Providers>
     <html lang="en" data-theme="light">
      <body className={syne.className}>
        <AppRouterCacheProvider>
          <>
          <Toaster/>
          {children}
          </>
        </AppRouterCacheProvider>
      </body>
    </html>
 </Providers>
  )
}
