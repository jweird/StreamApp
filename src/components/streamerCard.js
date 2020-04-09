import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';

//GET https://api.twitch.tv/kraken/users?login=dallas

const StreamerCard = ({ streamerID }) => {
  useEffect(() => {
    fetch(`https://api.twitch.tv/helix/streams/?user_id=${streamerID}`, {
      headers: {
        'client-id': 'idhere',
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
          isLive: data.data[0].type,
          streamTitle: data.data[0].title,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [streamerState, setStreamerState] = useState({
    streamer: '',
    isLive: false,
    streamTitle: '',
  });

  return streamerID.map((streamerID) => (
    <Card>
      <h2>{streamerState.streamer}</h2>
      <h3>{streamerState.streamTitle}</h3>
      <div>{streamerState.isLive}</div>
    </Card>
  ));
};

export default StreamerCard;
