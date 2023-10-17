'use client';
import { Page } from '@patternfly/react-core';
import { FormEvent, ReactNode, useState } from 'react';
import LayoutHeader from '@/components/Layout/LayoutHeader';
import LayoutSidebar from '@/components/Layout/LayoutSidebar';

export default function PatternflyLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [activeItem, setActiveItem] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onNavSelect = (_event: FormEvent<HTMLInputElement>, result: any) => {
    setActiveItem(result.itemId);
  };

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
        <LayoutSidebar activeId={activeItem} sidebarNavOpen={isSidebarOpen} />
      }
    >
      {children}
    </Page>
  );
}
