/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';



export default class Slider extends React.PureComponent {
  constructor() {
    super();
    this.state={
      images: [
       'present01.jpg',
       'present02.jpg',
       'present03.jpg',
       'present04.jpg',
       'present05.jpg',
       'present06.jpg',
       'present07.jpg',
       'present08.jpg',
       'present09.jpg',
       'present10.jpg',
       'present11.jpg'],
       activeIndex: 0
    }
  }

  componentDidMount() {
    this.slideShow();
  }

  slideImage = () => {
    let images = this.state.images;
    let activeIndex = this.state.activeIndex;

    for (var i = 0; i < images.length; i++) {
      if (i === activeIndex) {
        return images[i];
      }
    }
  }

  nextImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    if (activeIndex + 1 < images.length) {
      this.setState({
        activeIndex: activeIndex + 1
      })
    }
    else {
      this.setState({
        activeIndex: 0
      })
    }
  }

  slideShow = () => {
    var _this = this;
    setInterval(function(){
      _this.nextImage();
    }, 10000);
  }


  render() {
    return (
      <div>
        <div className="sliderDiv">
          <div id="slide" className="slide">
            <img className="slideImage" src={require('../../images/'+ this.slideImage())}/>

          </div>
        </div>
      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
