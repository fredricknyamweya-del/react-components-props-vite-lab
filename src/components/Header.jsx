// Header.jsx - Displays the blog's name in a header element
// Props: name (string) - The name of the blog

import React from 'react';

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;