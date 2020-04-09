//https://api.twitch.tv/helix/streams?game_id=33214
fetch('https://api.twitch.tv/helix/streams?game_id=33214')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const ids = ['232672264', '452820573'];

//232672264 insomniac
//452820573 jauz
