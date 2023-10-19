'use client';
import {
  Nav,
  NavItem,
  NavList,
  PageSidebar,
  PageSidebarBody,
} from '@patternfly/react-core';
import { Fragment } from 'react';

interface ILayoutSidebar {
  /** Pass the current pathname for comparison */
  pathname?: string;

  /** Programmatically manage the sidebar navigation */
  sidebarNavOpen?: boolean;
}

const LayoutSidebar = ({
  pathname = '/',
  sidebarNavOpen = true,
}: ILayoutSidebar) => {
  const navItems = (
    <Fragment>
      <NavItem
        id={'landingPage)'}
        to={'/'}
        itemId={0}
        isActive={pathname === '/'}
      >
        Landing Page
      </NavItem>
      <NavItem
        id={'selectConnector)'}
        to={'/select-connector'}
        itemId={1}
        isActive={pathname === '/select-connector'}
      >
        Select Connector
      </NavItem>
    </Fragment>
  );

  return (
    <PageSidebar isSidebarOpen={sidebarNavOpen}>
      <PageSidebarBody>
        <Nav aria-label="Nav">
          <NavList>{navItems}</NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );
};

export default LayoutSidebar;
