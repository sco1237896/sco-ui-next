'use client'
import PlaygroundPage from "./page";
import { Meta, StoryFn } from "@storybook/react";
import { ITile } from "../../../../kaoto-next/packages/ui/src/components/Catalog/Catalog.models";

export default {
  title: 'Pages/Playground',
  component: PlaygroundPage,
} as Meta<typeof PlaygroundPage>;

const Template: StoryFn<typeof PlaygroundPage> = (args) => {
  console.log(args);

  return <PlaygroundPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
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
  onTileClick: () => null,
};


