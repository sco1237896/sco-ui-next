'use client';
import { Card, CardBody, CardTitle } from '@patternfly/react-core';
import { Catalog, ITile } from '@kaoto-next/ui';
import { useCallback } from 'react';

export default function PlaygroundPage() {
  const tiles: Record<string, Array<ITile<string>>> = {
    Group1: [
      {
        name: 'connector-1',
        description: 'This is the description for connector 1',
        tags: ['tag1', 'tag2'],
        title: 'Connector 1',
        type: 'link',
        headerTags: ['headerTag1', 'headerTag2'],
        version: '1.0.0',
        rawObject: 'Tile 1 raw object',
      },
    ],
  };

  const onTileClick = useCallback((tile: ITile<unknown>) => {
    console.log('Tile clicked', tile);
  }, []);

  return (
    <Card>
      <CardTitle>Playground</CardTitle>

      <CardBody>
        <p>
          This is a playground page. It is not part of the app, but is a place
          where you can test out components, styles, etc.
        </p>

        <Catalog tiles={tiles} onTileClick={onTileClick} />
      </CardBody>
    </Card>
  );
}
