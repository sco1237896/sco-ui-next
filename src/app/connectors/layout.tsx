'use client';
import {
  Button, Masthead,
  MastheadMain,
  Nav, NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  Toolbar,
  ToolbarContent, ToolbarGroup,
  ToolbarItem
} from "@patternfly/react-core";
import { ReactNode } from "react";
import Link from "next/link";
import { CogIcon, QuestionCircleIcon } from "@patternfly/react-icons";

export default function PatternflyLayout({
                                     children,
                                   }: {
  children: ReactNode;
}) {
  return (
    <Page
      header={
        <Masthead id="stack-masthead" display={{ default: "stack" }}>
          <MastheadMain>
            <Link href={"/"} className={"pf-v5-c-masthead_brand pf-v5-u-mx-xl"}>
              Smart Connectors
            </Link>
            <Toolbar id="toolbar" isFullHeight isStatic>
              <ToolbarContent>
                <ToolbarGroup
                  variant="icon-button-group"
                  align={{ default: "alignRight" }}
                  spacer={{ default: "spacerNone", md: "spacerMd" }}
                >
                  <ToolbarGroup
                    variant="icon-button-group"
                    visibility={{ default: "hidden", lg: "visible" }}
                  >
                    <ToolbarItem>
                      <Button
                        aria-label="Settings"
                        variant={"plain"}
                        icon={<CogIcon />}
                      />
                    </ToolbarItem>
                    <ToolbarItem>
                      <Button
                        aria-label="Help"
                        variant={"plain"}
                        icon={<QuestionCircleIcon />}
                      />
                    </ToolbarItem>
                  </ToolbarGroup>
                </ToolbarGroup>
              </ToolbarContent>
            </Toolbar>
          </MastheadMain>
        </Masthead>
      }
    sidebar={
      <PageSidebar>
        <PageSidebarBody>
          <Nav aria-label="Nav">
            <NavList>
              <NavItem id={'connectors'} to={'/connectors/create-flow'} itemId={0}>Connectors</NavItem>
            </NavList>
          </Nav>
        </PageSidebarBody>
      </PageSidebar>
    }
  >
    {children}
  </Page>
);
}
