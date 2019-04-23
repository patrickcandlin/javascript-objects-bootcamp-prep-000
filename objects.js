var playlist = {X: "All Star"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]: songTitle});
}