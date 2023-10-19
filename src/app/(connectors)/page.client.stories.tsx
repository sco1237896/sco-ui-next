import { Meta, StoryFn } from '@storybook/react';
import LandingPageClient from '@/app/(connectors)/page.client';

export default {
  title: 'Pages/LandingPage',
  component: LandingPageClient,
} as Meta<typeof LandingPageClient>;

const Template: StoryFn<typeof LandingPageClient> = (args) => {
  console.log(args);
  return <LandingPageClient />;
};

export const DefaultState = Template.bind({});
DefaultState.args = {};

export const EmptyState = Template.bind({});
EmptyState.args = {};
