import React from 'react';
import Link from './Link';

function App() {
  const mString: string = "hello world fuck"
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>
            src/App.tsx
          </code> and save to reload.
        </p>
        <Link content={mString} ></Link>
      </header>
    </div>
  );
}

export default App;
