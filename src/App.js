import { useState } from 'react';
import TestApp from './TestApp';

export default function App() {
  // const templateURL = 'https://api.memegen.link/images/aag';
  // const id = props.id;
  // const randomMeme = templateURL + props.id;
  // const [meme, setMeme] = useState();
  // const [memeUrl, setMemeUrl] = useState(
  //   `https://api.memegen.link/templates/${topText}/${bottomText}.gif?width=300`,
  // );

  // input fields for text and generate button

  return (
    <>
      {/* <form>
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
      {/* {meme} */}
      <TestApp />
    </>
  );
}
