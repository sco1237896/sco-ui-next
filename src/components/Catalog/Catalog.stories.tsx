import { Catalog, ITile } from '@kaoto-next/ui';
import React, { Component, useCallback } from 'react';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: "Catatog/ConnectorTypeCard",
    component: Catalog
}

export const basic = () => {
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
            rawObject: 'Tile 1 raw object'
          }
        ]
      };
    
    const onTileClick = useCallback((tile: ITile<unknown>) => {
        console.log('Tile clicked', tile);
        }, []);

    return (<Catalog tiles={tiles} onTileClick={onTileClick} />);
}