import { Meta, StoryFn } from '@storybook/react';
import LayoutHeader from './LayoutHeader';

export default {
  title: 'Components/Layout/LayoutHeader',
  component: LayoutHeader,
} as Meta<typeof LayoutHeader>;

const Template: StoryFn<typeof LayoutHeader> = (args) => {
  return <LayoutHeader handleNavToggle={args.handleNavToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  handleNavToggle: () => {
    console.log('Nav toggled');
  },
};
