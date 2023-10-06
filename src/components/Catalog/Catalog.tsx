'use client';
import { Catalog, ITile } from '@kaoto-next/ui';
import { useCallback } from 'react';
import {
  PageSection,
  Split,
  SplitItem,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';

interface ICatalogContainer {
  tiles: Record<string, ITile[]>;
}

const CatalogContainer = ({ tiles }: ICatalogContainer) => {
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
        <Catalog tiles={tiles} onTileClick={onTileClick} />
      </PageSection>
    </>
  );
};

export default CatalogContainer;
