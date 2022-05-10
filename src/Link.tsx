// ./src/module01.tsx
import React from 'react';

const Link = (props: {content: string}) => {
  const { content } = props;
  return (
    <a 
    className="App-link" 
    href="https://reactjs.org/"
    target="_blank"
    rel="noreferrer">
      {content}
    </a>
  );
};

export default Link;