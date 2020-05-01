import React, { Component } from 'react'
import Header from './Header.js';
import Title from './Title.js';
import BodyImage from './BodyImage.js';
import TextBody from './TextBody.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <BodyImage />
        <TextBody />
        {/* <Recipe />
        <Author />
        <Footer /> */}
      </div>
    )
  }
}
