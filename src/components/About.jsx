// About.jsx - Displays the blog's image and description in an aside element
// Props: image (string, optional) - URL of the blog logo, defaults to placeholder
//        about (string) - Description of the blog

import React from 'react';

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;