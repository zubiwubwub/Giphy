import React, { Component } from 'react';
import giphy from 'giphy-api';

import './App.css';

import GifList from '../GifList/GifList';
import SearchBar from '../SearchBar/SearchBar';
import Gif from '../Gif/Gif';


class App extends Component {
  state = {
    gifs: [],
    selectedGifId: 'tOWyML1WPzKjm'
  };

  handleSearch = (event) => {
    const { value } = event.target;

    giphy(process.env.GIPHY_API).search({
     q: value,
     rating: 'g',
     limit: 10
    })
     .then(res => {
      console.log(res);
      this.setState({
        gifs: res.data.map(gif => gif.id) });
      });
}

selectGif = (id) => {
  this.setState({
    selectedGifId: id
  });
}

  render() {
    const { gifs } = this.state;
    return (
        <div className="app">
          <div className="left-scene">
            <SearchBar onChange={this.handleSearch} />
                <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
          <GifList gifs={gifs} onSelect={this.selectGif}/>
          </div>
        </div>
    );
  }
}

export default App;
