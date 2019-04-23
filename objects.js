var playlist = {Rock: "All Star - Smashmouth"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}