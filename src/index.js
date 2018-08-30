//  Gives us access to react and
//  react-dom so we can use them
//  on this page
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//  Import components
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';

//  Youtube Video API key
const API_KEY = 'AIzaSyAaL6QAR9mFopRgwb-9wrgDWZpl9s2UJxQ';

//  Create a new component
//  This component should produce
//  some html

// const App = function() {
//   return <div>Hi!</div>;
// }

//  This replaces the commented code above
//  with the ES6 arrow function
//  Functional component
// const App = () => {
//   return (
  
//       <div>
//         <SearchBar />
//       </div>
  
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('mhxx speedrun');

  }

  videoSearch(term) {
    //  Call the youtube api search and supply
    //  all the necessary info to fetch data
    YTSearch({ key: API_KEY, term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    //  Call 'debounce' via 'lodash' to throttle the updating
    //  of our search bar
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoPlayer video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } 
          videos={ this.state.videos } />
      </div>
    );
  }
}

//  Get the component's generated html
//  and show it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
