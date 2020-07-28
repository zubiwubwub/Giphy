import React, { Component } from 'react';
import Gif from '../Gif/Gif'

class GifList extends Component {
  handleClick = (id) => {
    const { onSelect } = this.props;

    onSelect(id)
  }

  render() {
    const { gifs } = this.props;

    return (
      <div className="gif-list">
      {gifs.map(id => {
        return <Gif key={id} id={id} onClick={this.handleClick} />
      })}
      </div>
    );
  }

}

export default GifList;
