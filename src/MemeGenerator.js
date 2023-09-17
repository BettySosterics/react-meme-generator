import { useState } from 'react';
import { memeTemplatesList } from './MemeTemplatesList';

const MemeGenerator = () => {
  const [inputText, setInputText] = useState({
    topText: 'betty',
    bottomText: 'codes',
  });
  const [randomImage, setRandomImage] = useState(
    `https://api.memegen.link/images/buzz/${inputText.topText}/${inputText.bottomText}.png?height=450`,
  );
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const [template, setTemplate] = useState('buzz');

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const randNum = Math.floor(Math.random() * allMemeImgs.length);
  //   const randMemeImgUrl = allMemeImgs[randNum];
  //   setRandomImage(randMemeImgUrl);
  // };

  function generateButton(props) {
    return (
      <div>
        <button
          onClick={() => {
            const url = `https://api.memegen.link/images/${template}/${inputText.topText}/${inputText.bottomText}.png?height=450`;
            setRandomImage(url);
          }}
          data-test-id="generate-meme"
        >
          Generate
        </button>
      </div>
    );
  }
  return (
    <div className="meme-container">
      {/* <form onSubmit={handleSubmit}> */}
      <input
        name="topText"
        placeholder="Add Top Text"
        value={inputText.topText}
        onChange={handleChange}
      />
      <input
        name="bottomText"
        placeholder="Add Bottom Text"
        value={inputText.bottomText}
        onChange={handleChange}
      />

      {generateButton()}

      <div className="meme">
        <img src={randomImage} alt="" />
      </div>
    </div>
  );
};

export default MemeGenerator;
