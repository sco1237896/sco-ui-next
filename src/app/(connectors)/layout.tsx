'use client';
import { Page } from '@patternfly/react-core';
import { ReactNode, useState } from 'react';
import LayoutHeader from '@/components/Layout/LayoutHeader';
import LayoutSidebar from '@/components/Layout/LayoutSidebar';
import { usePathname } from 'next/navigation';

export default function PatternflyLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <Page
      header={
        <LayoutHeader
          handleNavToggle={() => {
            console.log('toggled!');
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
      }
      sidebar={
        <LayoutSidebar pathname={pathname} sidebarNavOpen={isSidebarOpen} />
      }
    >
      {children}
    </Page>
  );
}
