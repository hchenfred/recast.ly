// TODO: Render the `App` component to the DOM
//console.log(window.searchYouTube);
ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube.bind(window), 500)}/>, document.getElementById('app'));
