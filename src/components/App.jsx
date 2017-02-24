class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedVideo: window.exampleVideoData[0],
      filterText: '',
      videoResult: []
    };

    this.onListItemClick = this.onListItemClick.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      q: this.state.filterText,
      maxResults: 5
    };
    //console.log(window.searchYouTube);
    // var context = this;
    //var videos;
    this.props.searchYouTube(options, function (data) {
      // context.setState({videoResult: data});
      console.log('compodidmount', this);
      console.log(data);
      this.setState({
        videoResult: data
      });
      // videos = data;
    }.bind(this));
    // this.setState({
    //   videoResult: videos
    //   //data,
    // });
  }

  onListItemClick(clicked) {
    //console.log(clicked.dispatchConfig);
    this.setState({
      clickedVideo: clicked
      //data,
    });
  }

  onSearchButtonClick(filterText) {
    console.log(filterText);
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return ( 
      <div>
        <Nav 
          onSearchButtonClick={this.onSearchButtonClick}
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

