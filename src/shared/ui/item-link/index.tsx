import React from 'react';

interface ItemLinkProps {
  text: string;
}

class ItemLink extends React.Component<ItemLinkProps> {
  render() {
    const { text } = this.props;
    return (
      <li className="relative after:block after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-neutral-500 last:after:hidden">
        <a className="block p-3 text-lg font-semibold" href="#">
          {text}
        </a>
      </li>
    );
  }
}

export default ItemLink;
