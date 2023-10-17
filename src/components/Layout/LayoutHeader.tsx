'use client';
import {
  Button,
  Masthead,
  MastheadMain,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import Link from 'next/link';
import { Fragment } from 'react';
import { CogIcon, QuestionCircleIcon } from '@patternfly/react-icons';

const LayoutHeader = () => {
  const toolbarItems = (
    <Fragment>
      <ToolbarItem>
        <Button aria-label="Settings" variant={'plain'} icon={<CogIcon />} />
      </ToolbarItem>
      <ToolbarItem>
        <Button
          aria-label="Help"
          variant={'plain'}
          icon={<QuestionCircleIcon />}
        />
      </ToolbarItem>
    </Fragment>
  );

  return (
    <Masthead id="stack-masthead" display={{ default: 'stack' }}>
      <MastheadMain>
        <Link href={'/'} className={'pf-v5-c-masthead_brand pf-v5-u-mx-xl'}>
          Smart Connectors
        </Link>
        <Toolbar id="toolbar" isFullHeight isStatic>
          <ToolbarContent>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: 'alignRight' }}
              spacer={{ default: 'spacerNone', md: 'spacerMd' }}
            >
              <ToolbarGroup
                variant="icon-button-group"
                visibility={{ default: 'hidden', lg: 'visible' }}
              >
                {toolbarItems}
              </ToolbarGroup>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </MastheadMain>
    </Masthead>
  );
};

export default LayoutHeader;
