import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))
  })

  return (
    <div className="App">
     hello hello
     <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
