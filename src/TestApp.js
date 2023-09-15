import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TestApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.memegen.link/docs/openapi.json`,
        );
        setData(response.data);
        setError(null);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);

  return (
    <>
      {/* <div>
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
  </div> */}
      <div>
        <form>
          <input placeholder="your top text" />
          <input placeholder="your bottom text" />
        </form>
        <button
          onClick={() => {
            const randomCalledMeme = data;
            setData(randomCalledMeme);
          }}
        >
          we generate your meme
        </button>
        {/* Show the meme on the screen */}
        {data}
      </div>
    </>
  );
}
