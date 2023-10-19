/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Gallery from './page.client.stories';
import SelectConnectorClient from './page.client';

describe('SelectConnectorClient', () => {
  it('renders', () => {
    render(<SelectConnectorClient tiles={Gallery.args?.tiles!} />);
    expect(screen.getByRole('main', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('stepCatalog')).toBeInTheDocument();

    expect(screen.getByText('Create Flow')).toBeInTheDocument();
  });
});
