import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {

    const { id } = this.props;

      const src = `https://media.giphy.com/media/${id}/200w.webp`;
    return (
        <img src={src} className="gif" alt="most amazing gif on earth" onClick={this.handleClick} />
      );
  }
}

export default Gif;
