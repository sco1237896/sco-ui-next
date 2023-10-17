'use client';
import {
  Nav,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
} from '@patternfly/react-core';
import { Fragment, ReactNode } from 'react';
import LayoutHeader from '@/components/Layout/LayoutHeader';

export default function PatternflyLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navItems = (
    <Fragment>
      <NavItem id={'landingPage)'} to={'/'} itemId={0}>
        Landing Page
      </NavItem>
      <NavItem id={'selectConnector)'} to={'/select-connector'} itemId={1}>
        Select Connector
      </NavItem>
    </Fragment>
  );

  return (
    <Page
      header={<LayoutHeader />}
      sidebar={
        <PageSidebar>
          <PageSidebarBody>
            <Nav aria-label="Nav">
              <NavList>{navItems}</NavList>
            </Nav>
          </PageSidebarBody>
        </PageSidebar>
      }
    >
      {children}
    </Page>
  );
}
