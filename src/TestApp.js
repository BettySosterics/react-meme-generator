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
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
      </div>
    </>
  );
}
