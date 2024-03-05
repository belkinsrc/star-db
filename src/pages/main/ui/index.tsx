import React from 'react';
import { ItemList } from '@/shared/ui';
import { RandomPlanet } from '@/entities/random-planet';
import { ItemDetails } from '@/entities/item-details';
import { Header } from '@/widgets/header';

class MainPage extends React.Component {
  render() {
    return (
      <div className="max-w-5xl m-auto">
        <Header />
        <RandomPlanet />
        <ItemList />
        <ItemDetails />
      </div>
    );
  }
}

export default MainPage;
