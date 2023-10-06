import { Meta, StoryFn } from '@storybook/react';
import SelectConnector from './page';

export default {
  title: 'SelectConnector',
  component: SelectConnector,
} as Meta<typeof SelectConnector>;

const Template: StoryFn<typeof SelectConnector> = (args) => {
  console.log(args);
  return <SelectConnector />;
};

export const Default = Template.bind({});
