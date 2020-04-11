import React, { useState, useEffect } from "react";
import StreamerCard from "./components/streamerCard";

const ids = ["232672264", "452820573"];

function App() {
  useEffect(() => {
    fetch(`https://api.twitch.tv/helix/streams/?user_id=${ids[0]}`, {
      headers: {
        "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID, //uses env variables for dev, remove before build
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data[0]);
        setStreamerState({
          ...streamerState,
          streamer: data.data[0].user_name,
          title: data.data[0].title,
          isLive: data.data[0].type,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [streamerState, setStreamerState] = useState({
    streamer: "",
    isLive: "",
    streamTitle: "",
  });

  return (
    <div className='App'>
      <StreamerCard
        streamerName={streamerState.streamer}
        streamTitle={streamerState.title}
        isLive={streamerState.isLive}
      />
    </div>
  );
}

export default App;
