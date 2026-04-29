// Article.jsx - Displays a single blog post in an article element
// Props: title (string) - Title of the post
//        date (string, optional) - Date of the post, defaults to "January 1, 1970"
//        preview (string) - Preview text of the post
//        minutes (number, optional) - Reading time in minutes, defaults to 0

import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes = 0 }) {
  const minutesToRead = minutes < 30 ? `${Math.ceil(minutes / 5)} coffee cup${Math.ceil(minutes / 5) === 1 ? '' : 's'}` : `${Math.ceil(minutes / 10)} bento box${Math.ceil(minutes / 10) === 1 ? '' : 'es'}`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead} ({minutes} min read)</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;