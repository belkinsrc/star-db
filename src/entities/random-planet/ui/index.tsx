import React from 'react';

class RandomPlanet extends React.Component {
  render() {
    return (
      <article className="flex items-center justify-start gap-8 p-5 mb-8 rounded-md bg-neutral-700">
        <div className="relative w-48 h-48 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-amber-100"></div>
        </div>
        <div className="font-semibold">
          <div className="text-6xl mb-5">Planet</div>
          <div className="pl-8">
            <ul className="text-lg">
              <li>
                <span className="block w-full h-px bg-neutral-500 mb-0.5"></span>
                Population
              </li>
              <li>
                <span className="block w-full h-px bg-neutral-500 mb-0.5"></span>
                Rotation Period
              </li>
              <li>
                <span className="block w-full h-px bg-neutral-500 mb-0.5"></span>
                Diameter
              </li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default RandomPlanet;
