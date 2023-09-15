// Import React (Mandatory Step).
import { useEffect, useState } from 'react';

export default function TestApp() {
  const [inputText, setInputText] = useState({
    topText: '',
    bottomText: '',
  });
  const [randomImage, setRandomImage] = useState('');
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  const handleChange = (event) => {
    setInputText({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const randMemeImgUrl = allMemeImgs.url;
    setRandomImage(randMemeImgUrl);
  };

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json()) // Parse the response to JSON
      .then((data) => setAllMemeImgs(data)); // Set the data to allMemeImgs
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="your top text"
          value={inputText.topText}
          onChange={handleChange}
        />
        <input
          placeholder="your bottom text"
          value={inputText.bottomText}
          onChange={handleChange}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={randomImage} alt="" />
        <h2 className="top">{inputText.topText}</h2>
        <h2 className="bottom">{inputText.bottomText}</h2>
      </div>
    </div>
  );
}

// import axios from 'axios';
// import { useState } from 'react';

// export default function TestApp(props) {
//   const [randomMeme, setRandomMeme] = useState();

//   function search() {
//     const templateURL = 'https://api.memegen.link/images/aag/';
//     axios.get(templateURL).then(function (response) {
//       console.log(response);
//     });

//     function handleSubmit(event) {
//       event.preventDefault();
//       search();
//     }

//     function getRandomMeme(event) {
//       setRandomMeme(event.target.value);
//     }

//     return (
//       <>
//         <form>
//           <input onSubmit={handleSubmit} placeholder="your top text" />
//           <input onSubmit={handleSubmit} placeholder="your bottom text" />
//         </form>
//         <button
//           onClick={() => {
//             const randomCalledMeme = randomMeme;
//             setRandomMeme(randomCalledMeme);
//           }}
//         >
//           we generate your meme
//         </button>
//         {randomMeme}
//       </>
//     );
//   }
// }
