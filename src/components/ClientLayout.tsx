'use client';

import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <AuthProvider>
      <LanguageProvider>
        {!isAdminPage && <Navigation />}
        {children}
        {!isAdminPage && <Footer />}
      </LanguageProvider>
    </AuthProvider>
  );
}