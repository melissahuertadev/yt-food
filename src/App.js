import React, { Component } from "react";
import './App.css';
import SearchBar from "./components/searchbar";
import youtube from "./apis/youtube";
import VideoList from "./components/videolist";
import VideoDetail from "./components/videodetail";


class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
      layout: "left",
    };
  }

  componentDidMount(){
    this.onTermSubmit('peruvian');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: `${term}` } });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
