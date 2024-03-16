import React from 'react';
import { MoonLoader } from 'react-spinners';
import { getPlanet } from '@/entities/random-planet/api';

interface RandomPlanetProps {}
interface RandomPlanetState {
  loading: boolean;
}

class RandomPlanet extends React.Component<RandomPlanetProps, RandomPlanetState> {
  constructor(props: RandomPlanetProps) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    getPlanet(3)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() =>
        this.setState({
          loading: false,
        }),
      );
  }

  render() {
    const { loading } = this.state;

    return (
      <article className="flex items-center justify-start gap-8 p-5 mb-8 rounded-md bg-neutral-700">
        <MoonLoader
          loading={loading}
          size={100}
          color={'#10b981'}
          speedMultiplier={1}
          className="m-auto"
        />
        {!loading && (
          <>
            <div className="relative w-48 h-48 rounded-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-amber-100"></div>
            </div>
            <div>
              <div className="text-6xl font-semibold mb-5">Planet</div>
              <div className="pl-8">
                <ul className="text-lg font-semibold">
                  <li>
                    <span className="block h-px bg-neutral-500 mb-0.5"></span>
                    Population
                  </li>
                  <li>
                    <span className="block h-px bg-neutral-500 mb-0.5"></span>
                    Rotation Period
                  </li>
                  <li>
                    <span className="block h-px bg-neutral-500 mb-0.5"></span>
                    Diameter
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </article>
    );
  }
}

export default RandomPlanet;
