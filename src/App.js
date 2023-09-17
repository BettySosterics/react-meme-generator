// import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('your');
  const [bottomText, setBottomText] = useState('meme');
  const [memeUrl, setMemeUrl] = useState(
    <img
      alt=""
      src={`https://api.memegen.link/images/buzz/betty/codes.png?height=450`}
    />,
  );

  // function handleTopText(event) {
  //   setTopText(event.currentTarget.value);
  // }
  // function handleBottomText(event) {
  //   setBottomText(event.currentTarget.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <>
      <div className="header">
        <h1>Meme Generator</h1>
      </div>

      <div>
        <input
          id="topText"
          onChange={(e) => {
            setTopText(e.target.value);
          }}
          value={topText}
          placeholder="your top text"
        />

        <input
          id="bottomText"
          onChange={(e) => {
            setBottomText(e.target.value);
          }}
          value={bottomText}
          placeholder="your bottom text"
        />

        {/* dropdown for template selection */}

        {/* <select name="dropdown" id="dropdown">
          <option value="buzz">
            <a href="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif">
              Buzz
            </a>
          </option>
          <option value="doge">
            <a href="https://api.memegen.link/images/doge/such_meme/very_skill.png">
              Doge
            </a>
          </option>
          <option value="drunk">
            <a href="https://api.memegen.link/images/drunk/Walk_in_a_straight_line~q/Officer,_I_can_barely_stand.png">
              Drunk
            </a>
          </option>
          <option value="ermg">
            <a href=" https://api.memegen.link/images/ermg/ermahgerd/memes.png">
              Ergm
            </a>
          </option>
        </select> */}

        {/* generate button */}
        <button onClick={handleSubmit}>generate your meme here</button>
      </div>

      <div>{memeUrl}</div>
      <hr />
    </>
  );
}
