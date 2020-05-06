import React, { Component } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent/ListComponent";
import CartComponent from "./components/CartComponent/CartComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      images: [],
      isCart: false
    };
  }

  componentDidMount() {
    this.fetchImages();

    var intObserver = new IntersectionObserver(target => {
      // fetch images and add them to the state
      this.fetchImages();
    });
    let target = document.querySelector("#targetId"); //whenver user scroll till the target we will fetch more images
    intObserver.observe(target); // start observation
  }

  fetchImages = async () => {
    const URL = `https://picsum.photos/v2/list?page=${this.state.pageNumber}&limit=5`; //fetching 5 images at a time
    const imagesArray = await fetch(URL);
    const images = await imagesArray.json();
    console.log(images);
    this.setState({
      images: [...this.state.images, ...images],
      pageNumber: this.state.pageNumber + 1
    });
  };

  onselected = image => {
    image.isSelected = !image.isSelected;
    this.setState({ ...this.state.images });
  };

  render() {
    return (
      <div>
        <button
          id="next-btn"
          onClick={() => this.setState({ isCart: !this.state.isCart })}
        >
          {this.state.isCart ? "Prev" : "Next"}
        </button>
        {this.state.isCart ? (
          <CartComponent images={this.state.images} />
        ) : (
          <ListComponent
            images={this.state.images}
            onselected={this.onselected}
          />
        )}

        <div id="targetId"></div>
      </div>
    );
  }
}

export default App;
