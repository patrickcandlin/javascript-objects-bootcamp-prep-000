var playlist = {Rock: "All Star - Smashmouth"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]: songTitle});
}