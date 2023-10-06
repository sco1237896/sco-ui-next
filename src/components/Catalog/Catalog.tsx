'use client';
import { Catalog, ITile } from '@kaoto-next/ui';

interface ICatalogContainer {
  onTileClick: (_tile: ITile) => void;
  tiles: Record<string, ITile[]>;
}

const CatalogContainer = ({ onTileClick, tiles }: ICatalogContainer) => {
  return <Catalog tiles={tiles} onTileClick={onTileClick} />;
};

export default CatalogContainer;
