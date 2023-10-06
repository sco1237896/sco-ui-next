'use client';
import {
  PageSection,
  Split,
  SplitItem,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { ITile } from '@kaoto-next/ui';
import CatalogContainer from '@/components/Catalog/Catalog';
import { useCallback } from 'react';

interface ISelectConnectorClient {
  tiles: Record<string, ITile[]>;
}

const SelectConnectorClient = ({ tiles }: ISelectConnectorClient) => {
  const onTileClick = useCallback((tile: ITile) => {
    console.log('Tile clicked', tile);
  }, []);

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
      </PageSection>
      <PageSection>
        <CatalogContainer onTileClick={onTileClick} tiles={tiles} />
      </PageSection>
    </>
  );
};

export default SelectConnectorClient;
