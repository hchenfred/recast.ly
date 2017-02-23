class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: window.exampleVideoData[0]
    };

    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(clicked) {
    console.log('hello');
    console.log(clicked);
    //console.log(clicked.dispatchConfig);
    this.setState({
      filterText: clicked
      //data,
    });
    console.log(this.state.filterText);
  }

  render() {
    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.filterText}/>
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={window.exampleVideoData}
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
ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;

