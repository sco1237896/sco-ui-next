import { ITile } from '@kaoto-next/ui';
import SelectConnectorClient from '@/app/(connectors)/select-connector/page.client';

export interface IConnector {
  type: string;
  name: string;
  title: string;
  description?: string;
  headerTags?: string[];
  tags: string[];
  version?: string;
  rawObject: string;
}

async function getConnectors() {
  // TODO: mock API request using proper data shape for connectors
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const connectors: IConnector[] = await res.json();
  const sourceConnectors: IConnector[] = [
    {
      name: 'example-source-connector',
      description: 'An example of a source connector',
      tags: ['salesforce', 'source'],
      title: 'Example Source Connector',
      type: 'link',
      headerTags: ['headerTag1', 'headerTag2'],
      version: '1.0.0',
      rawObject: '',
    },
  ];

  const sinkConnectors: IConnector[] = [
    {
      name: 'example-sink-connector',
      description: 'An example of a sink connector',
      tags: ['salesforce', 'sink'],
      title: 'Example Sink Connector',
      type: 'link',
      headerTags: ['headerTag1', 'headerTag2'],
      version: '1.0.0',
      rawObject: '',
    },
  ];

  return { sourceConnectors: sourceConnectors, sinkConnectors: sinkConnectors };
}

export default async function SelectConnectorPage() {
  const { sourceConnectors, sinkConnectors } = await getConnectors();

  const tiles: Record<string, Array<ITile>> = {
    sources: sourceConnectors,
    sinks: sinkConnectors,
  };

  return (
    <>
      <SelectConnectorClient tiles={tiles} />
    </>
  );
}
