// return all postman song titles

var whatWasReturned = {
  "page_cache_key":"anonuser_pagecache_\/api\/trackSearch?q=postman&limit=10",
  "page_title":"Free Music Archive",
  "aRows":[
      "[Peeled Hearts Paste] My Friend The Postman (9478)",
      "[Two Prong] The Postman (44042)",
      "[Meltdown] Postman (62866)",
      "[Melissa Laveaux] Postman (96692)",
      "[Oblivian Substanshall] I Used to Be a Postman (103748)"
    ]
}

function postmanSongTitles(){
  var answer = [];
  var artistsNsongs = whatWasReturned.aRows;
  var separatePropertiesArr = [];
  artistsNsongs.forEach(function(el){
    var obj = {};
    obj.artist = /\[(.*?)\]/.exec(el)[1];
    obj.songTitle = /\](.*?)\(/.exec(el)[1];
    obj.id = /\((.*?)\)/.exec(el)[1];
    separatePropertiesArr.push(obj);
  });
  separatePropertiesArr.forEach(function(el){
    // just the title, change ^^^ to map and uncomment the line below
    //return el.songTitle;

    // titles as separate a key value pair in separate obj
    // var obj = {};
    // obj.title = el.songTitle;
    // answer.push(obj);

    // titles AND ID (since there are songs with the same title) as separate a key value pair in separate obj
    var obj = {};
    obj.id = el.id;
    obj.title = el.songTitle;
    answer.push(obj);
  });
  return answer;
}

postmanSongTitles(whatWasReturned).forEach(function(el){
  $('#postmanSongs').append("<li>" + el.id + ": " + el.title + "</li>");
});
