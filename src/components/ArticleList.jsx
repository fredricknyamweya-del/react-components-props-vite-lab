// ArticleList.jsx - Renders a list of Article components in a main element
// Props: posts (array) - Array of post objects to display

import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;