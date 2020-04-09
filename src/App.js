import React from 'react';
import StreamerCard from './components/streamerCard';

const ids = ['232672264', '452820573'];

function App() {
  return (
    <div className='App'>
      <StreamerCard streamerID={ids} />
    </div>
  );
}

export default App;
