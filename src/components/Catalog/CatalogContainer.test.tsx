/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Gallery from '@/app/(connectors)/select-connector/page.client.stories';
import CatalogContainer from '@/components/Catalog/CatalogContainer';

describe('CatalogContainer', () => {
  it('renders', () => {
    render(
      <CatalogContainer
        tiles={Gallery.args?.tiles!}
        onTileClick={() => jest.fn()}
      />
    );
    expect(screen.getByRole('main', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('stepCatalog')).toBeInTheDocument();
  });
});
