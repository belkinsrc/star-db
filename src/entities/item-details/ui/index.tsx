import React from 'react';

class ItemDetails extends React.Component {
  render() {
    return (
      <article className="flex gap-3 w-1/2 p-3 bg-neutral-700 rounded">
        <div className="relative w-44 h-24 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-amber-100"></div>
        </div>
        <div>
          <div className="text-4xl font-semibold mb-3">Item</div>
          <div className="pl-3">
            <ul className="text-lg font-semibold">
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Model:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Manufacturer:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Cost in credits:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Length:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Crew:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Passengers:
              </li>
              <li>
                <span className="block h-px bg-neutral-500 mb-0.5"></span>
                Cargo capacity:
              </li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default ItemDetails;
