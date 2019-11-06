import React, { Component } from "react";
import QuoteBox from "./QuoteBox/Quote-Box.js";
import quotes from "./Quotes/quotes.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
  }

  getRandomQuote() {
    var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
  }

  handleClick = () => {
    const randomQuote = this.getRandomQuote();

    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  };

  getRandomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)}
    )`;
    return color;

  }

  render() {
    return (
      <div class="quoteBox">
        <QuoteBox
          color={this.getRandomColor()}
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
