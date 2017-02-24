var searchYouTube = (options, callback) => {

  // TODO

  // var request = gapi.client.youtube.search.list({
  //   part: "snippet",
  //   type: "video",
  //   q: encodeURIComponent('emma'),
  //   maxResults: 3
  // });

  // request.execute(function(response) {
  //   console.log(response);
  // });
  //debugger;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      q: options.query,
      maxResults: options.max
    },
    success: function(data) {
      //console.log();
      console.log(data);
      callback(data.items);
      //done();
    }
  });
};

window.searchYouTube = searchYouTube;
