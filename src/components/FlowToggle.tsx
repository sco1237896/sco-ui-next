import { Title, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import { useState } from 'react';

interface IFlowToggle {
  handleToggle: (id: string) => void;
}

const FlowToggle = ({ handleToggle }: IFlowToggle) => {
  const [flow, setFlow] = useState('');

  const handleItemClick = (event: any) => {
    const id: string = event.currentTarget.id;
    setFlow(id);
    console.log(flow);
    handleToggle(id);
  };

  return (
    <div>
      <Title headingLevel="h1" size="4xl">
        1. Select a type of flow
      </Title>
      <Title headingLevel="h3" size="2xl">
        Connector Type
      </Title>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Source to Kafka"
          buttonId="SourceToKafka"
          onChange={handleItemClick}
          handleToggle={handleToggle}
        />
        <ToggleGroupItem
          text="Kafka to Source"
          buttonId="KafkaToSource"
          onChange={handleItemClick}
          handleToggle={handleToggle}
        />
      </ToggleGroup>
    </div>
  );
};

export default FlowToggle;
