'use client';
import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  PageToggleButton,
} from '@patternfly/react-core';
import Link from 'next/link';
import { BarsIcon } from '@patternfly/react-icons';

interface ILayoutHeader {
  handleNavToggle: () => void;
}

const LayoutHeader = ({ handleNavToggle }: ILayoutHeader) => {
  return (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          onClick={handleNavToggle}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Link href={'/'}>Smart Connectors</Link>
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );
};

export default LayoutHeader;
