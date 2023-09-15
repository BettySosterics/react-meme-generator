import { useState } from 'react';

// import TestApp from './TestApp';

export default function App(props) {
  const templateURL = 'https://api.memegen.link/images/aag';
  const randomMeme = <img src='templateURL'{props.id} alt="the meme" />;
  const [meme, setMeme] = useState();

  //   useEffect(() => {
  //     fetch(templateURL)
  //       .then((r) => r.json())
  //       .then(setMeme);
  //   }, []);

  //   return <App meme={meme} />;
  // };

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

      {/* <TestApp /> */}
    </>
  );
}
