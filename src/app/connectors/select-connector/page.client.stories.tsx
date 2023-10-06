import { ITile } from '@kaoto-next/ui';
import { Meta, StoryFn } from '@storybook/react';
import SelectConnectorClient from '@/app/connectors/select-connector/page.client';

export default {
  title: 'Pages/SelectConnector',
  component: SelectConnectorClient,
} as Meta<typeof SelectConnectorClient>;

const Template: StoryFn<typeof SelectConnectorClient> = (args) => {
  console.log(args);
  return <SelectConnectorClient {...args} />;
};

export const Gallery = Template.bind({});
Gallery.args = {
  tiles: {
    'Source Connector': [
      {
        name: 'connector-type 1',
        description: 'This is the description for connector-type 1',
        tags: ['tag1', 'tag2'],
        title: 'Connector-type 1',
        type: 'link',
        headerTags: ['headerTag1', 'headerTag2'],
        version: '1.0.0',
        rawObject: 'Tile 1 raw object',
      },
      {
        name: 'connector-type 2',
        description: 'This is the description for connector-type 2',
        tags: ['tag1', 'tag2'],
        title: 'Connector-type 2',
        type: 'link',
        headerTags: ['headerTag1', 'headerTag2'],
        version: '1.0.0',
        rawObject: 'Tile 1 raw object',
      },
    ],
    'Sink Connector': [
      {
        name: 'connector-type 3',
        description: 'This is the description for connector-type 3',
        tags: ['tag1', 'tag2'],
        title: 'Connector-type 3',
        type: 'link',
        headerTags: ['headerTag1', 'headerTag2'],
        version: '1.0.0',
        rawObject: 'Tile 1 raw object',
      },
    ],
  } as Record<string, ITile[]>,
};
