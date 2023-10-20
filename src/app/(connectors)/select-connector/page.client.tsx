'use client';
import CatalogContainer from '@/components/Catalog/CatalogContainer';
import FlowToggle from '@/components/FlowToggle';
import { ITile } from '@kaoto-next/ui';
import {
  PageSection,
  Split,
  SplitItem,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { useCallback } from 'react';

interface ISelectConnectorClient {
  tiles: Record<string, ITile[]>;
}

const SelectConnectorClient = ({ tiles }: ISelectConnectorClient) => {
  const onTileClick = useCallback((tile: ITile) => {
    console.log('Tile clicked', tile);
  }, []);

  const handleToggle = (id: string) => {
    console.log('Thanks for letting me know it has been toggled ' + id);
  };

  return (
    <>
      <PageSection variant={'light'}>
        <Split>
          <SplitItem isFilled>
            <TextContent>
              <Title headingLevel="h1">Create Flow</Title>
              <Text>Lorem ipsum dolorum</Text>
            </TextContent>
          </SplitItem>
        </Split>
        <FlowToggle handleToggle={handleToggle} />
      </PageSection>
      <PageSection>
        <CatalogContainer onTileClick={onTileClick} tiles={tiles} />
      </PageSection>
    </>
  );
};

export default SelectConnectorClient;
