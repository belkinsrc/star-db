import React from 'react';

interface NavLinkProps {
  text: string;
}

class NavLink extends React.Component<NavLinkProps> {
  constructor(props: NavLinkProps) {
    super(props);
  }

  render() {
    const { text } = this.props;

    return (
      <a className="text-emerald-500 hover:text-emerald-400" href="#">
        {text}
      </a>
    );
  }
}

export default NavLink;
