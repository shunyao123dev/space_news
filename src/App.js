import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1> Space News </h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return (
            <div
              key={key}
              className="article"
              onClick={() => {
                window.location.href = val.url;
              }}
            >
              <h3> {val.title} </h3>
              <img src={val.image_url} />
              <p> {val.summary} </p>
              <h4> {val.published_at} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
