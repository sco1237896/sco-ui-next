import { Meta, StoryFn } from '@storybook/react';
import LayoutSidebar from './LayoutSidebar';

export default {
  title: 'Components/Layout/LayoutSidebar',
  component: LayoutSidebar,
} as Meta<typeof LayoutSidebar>;

const Template: StoryFn<typeof LayoutSidebar> = (_args) => {
  return <LayoutSidebar />;
};

export const Default = Template.bind({});
Default.args = {};
