var playlist = {Phil Ochs: "y" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]: songTitle});
}