import { Meta, StoryFn } from '@storybook/react';
import LayoutSidebar from './LayoutSidebar';

export default {
  title: 'Components/Layout/LayoutSidebar',
  component: LayoutSidebar,
} as Meta<typeof LayoutSidebar>;

const Template: StoryFn<typeof LayoutSidebar> = (args) => {
  return <LayoutSidebar pathname={args.pathname} />;
};

export const LandingPage = Template.bind({});
LandingPage.args = {
  pathname: '/',
};

export const SelectConnector = Template.bind({});
SelectConnector.args = {
  pathname: '/select-connector',
};

export const Inactive = Template.bind({});
Inactive.args = {
  pathname: '',
};
