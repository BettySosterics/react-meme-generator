import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const baseUrl = 'https://api.memegen.link/';
  const templatesUrl = `${baseUrl}templates/`;
  // const imageId = `${templatesUrl}`;
  const imagesUrl = `${baseUrl}images/aag/${topText}/${bottomText}.png`;
  // const [randomMeme, setRandomMeme] = useState([]);

  axios.get(templatesUrl).then((responseArr) => {
    console.log(responseArr.data);
  });
  // input fields for text and generate button

  return (
    <>
      <form>
        <input
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
          placeholder="your top text"
        />
        <input
          value={bottomText}
          placeholder="your bottom text"
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
      </form>
      <button type="button" onClick={(event) => topText}>
        we generate your meme
      </button>
      <div>THIS IS YOUR TOP TEXT: {topText} </div>
      <div>THIS IS YOUR BOTTOM TEXT: {bottomText} </div>
      {setTopText}
      {setBottomText}
    </>
  );
}
