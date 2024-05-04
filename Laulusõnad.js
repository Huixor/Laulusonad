function showSong(songId) {
    var songs = document.getElementsByClassName("song-text");
    for (var i = 0; i < songs.length; i++) {
      songs[i].style.display = "none";
    }
    document.getElementById(songId).style.display = "block";
  }
  function searchSong() {
    // Get input element and filter value
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
  
    // Get song list and list items
    var list = document.getElementById("song-list");
    var items = list.getElementsByTagName("li");
  
    // Loop through all list items and hide those that don't match the search term
    for (var i = 0; i < items.length; i++) {
      var a = items[i].getElementsByTagName("a")[0];
      var text = a.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  } 