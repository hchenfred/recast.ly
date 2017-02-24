class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedVideo: window.exampleVideoData[0],
      filterText: '',
      videoResult: []
    };

    this.onListItemClick = this.onListItemClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      query: this.state.filterText,
      maxResults: 5
    };
    //console.log(window.searchYouTube);
    // var context = this;
    //var videos;
    this.props.searchYouTube(options, function (data) {
      this.setState({
        videoResult: data
      });
    }.bind(this));
  }

  onListItemClick(clicked) {
    //console.log(clicked.dispatchConfig);
    this.setState({
      clickedVideo: clicked
      //data,
    });

  }

  onSearchChange(text) {
    this.setState({
      filterText: text
    });
    console.log(this);
    var options = {
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      query: text,
      maxResults: 5
    };
    //console.log(filterText);
    //console.log(options);
    var context = this;
    context.props.searchYouTube(options, (data) => {
      console.log(data);
      context.setState({
        videoResult: data
      });
    // videos = data;
    });
  }

  render() {
    return ( 
      <div>
        <Nav 
          onSearchChange={this.onSearchChange}
        />
        <div className="col-md-7">
          <VideoPlayer video={this.state.clickedVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videoResult}
            onVideoClick={this.onListItemClick}
          />
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList />
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//  ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;

