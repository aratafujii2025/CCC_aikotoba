import axios from "axios";
import React from "react";

const URL = "https://ccc-treasure-api.an.r.appspot.com/";

export default function App() {
  const [key, setKey] = React.useState(null);

  React.useEffect(() => {
    axios.get(URL).then((response) => {
      setKey(response.data);
    });
  }, []);

  if (!key) return null;

  return (
    <div>
      <h1>{key.treasure}</h1>
    </div>
  );
}
