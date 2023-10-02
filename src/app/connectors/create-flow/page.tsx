"use client";
import { Catalog, ITile } from "@kaoto-next/ui";
import { PageSection, Split, SplitItem, TextContent, Text, Title } from "@patternfly/react-core";

export interface ICreateFlowPage {
  onTileClick: () => void;
  tiles: Record<string, ITile[]>
}

const CreateFlowPage = ({ onTileClick, tiles }: ICreateFlowPage) => {
  return (
    <>
      <PageSection variant={"light"}>
        <Split>
          <SplitItem isFilled>
            <TextContent>
              <Title headingLevel="h1">Create Flow</Title>
              <Text>
                Lorem ipsum dolorum
              </Text>
            </TextContent>
          </SplitItem>
        </Split>
      </PageSection>
      <PageSection>
        <Catalog tiles={tiles} onTileClick={onTileClick} />
      </PageSection>
    </>
  );
};

export default CreateFlowPage;
