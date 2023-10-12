const React = require('react');

exports.Catalog = Catalog;

function Catalog(props) {
  return React.createElement('div', {
    className: 'catalog',
    'data-testid': 'stepCatalog',
    defaultValue: props.tiles,
    role: 'main',
  });
}
