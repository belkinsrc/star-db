import React from 'react';
import { ItemLink } from '@/shared/ui';

class ItemList extends React.Component {
  render() {
    return (
      <ul className="w-1/2 rounded overflow-hidden border border-neutral-500 bg-neutral-700">
        <ItemLink text="ItemLink1" />
        <ItemLink text="ItemLink2" />
        <ItemLink text="ItemLink3" />
        <ItemLink text="ItemLink4" />
      </ul>
    );
  }
}

export default ItemList;
