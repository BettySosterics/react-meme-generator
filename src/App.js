import { useState } from 'react';
import TestApp from './TestApp';

export default function App() {
  const randomMeme = (
    <img
      src="https://api.memegen.link/images/aag/_/aliens.png"
      alt="the meme"
    />
  );
  const [meme, setMeme] = useState(randomMeme.filter);

  // input fields for text and generate button

  return (
    <>
      <form>
        <input placeholder="your top text" />
        <input placeholder="your bottom text" />
      </form>
      <button
        onClick={() => {
          const randomCalledMeme = randomMeme;
          setMeme(randomCalledMeme);
        }}
      >
        we generate your meme
      </button>
      {/* Show the meme on the screen */}
      {meme}

      <TestApp />
    </>
  );
}
