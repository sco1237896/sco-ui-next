import { Catalog, ITile } from '@kaoto-next/ui';
import React, { useCallback } from 'react';
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: "Components/Catalog",
    component: Catalog
} as Meta<typeof Catalog>;

const Template: StoryFn<typeof Catalog> = (args) => {
  console.log(args);
  return <Catalog {...args} />;
};

export const Gallery = Template.bind({});
Gallery.args = {
  tiles: {
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
  } as Record<string, ITile[]>,
  onTileClick: () => {
    alert('Tile clicked! Omg');
  },
};
