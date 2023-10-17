'use client';
import {
  PageSection,
  Split,
  SplitItem,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';

const LandingPageClient = () => {
  return (
    <PageSection variant={'light'}>
      <Split>
        <SplitItem isFilled>
          <TextContent>
            <Title headingLevel="h1">Connectors</Title>
            <Text>This is the Landing Page</Text>
          </TextContent>
        </SplitItem>
      </Split>
    </PageSection>
  );
};

export default LandingPageClient;
