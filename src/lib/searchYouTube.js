var searchYouTube = (options, callback) => {

  
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
      //console.log(data);
      callback(data.items);
      //done();
    },
    timeout: 500
  });
};

window.searchYouTube = searchYouTube;
