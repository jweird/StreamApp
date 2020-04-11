import React from "react";
import Card from "@material-ui/core/Card";

//GET https://api.twitch.tv/kraken/users?login=dallas

const StreamerCard = ({ streamerName, streamTitle, isLive }) => {
  return (
    <Card>
      <h2>{streamerName}</h2>
      <h3>{streamTitle}</h3>
      <div>{isLive}</div>
    </Card>
  );
};

export default StreamerCard;
