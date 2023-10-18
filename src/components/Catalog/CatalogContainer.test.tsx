/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
<<<<<<< Updated upstream
import Gallery from '../../app/connectors/select-connector/page.client.stories';
=======
import Gallery from '@/app/(connectors)/select-connector/page.client.stories';
>>>>>>> Stashed changes
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
