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
        <div className="flex items-start gap-8">
          <ItemList />
          <ItemDetails />
        </div>
      </div>
    );
  }
}

export default MainPage;
