// App.jsx - Root component of the blog application
// Renders the Header, About, and ArticleList components, passing data from blogData as props

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const blogData = {
  name: "Underreacted",
  image: "https://via.placeholder.com/215",
  about: "A blog about learning React",
  articles: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your React application",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      date: "December 9, 2020",
      preview: "React, meet my old friend Class",
      minutes: 47,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.articles} />
    </div>
  );
}

export default App;