import React, { Component } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent/ListComponent";
import CartComponent from "./components/CartComponent/CartComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      lastIndex: 0,
      numberOfRows: 0,
      isCart: false
    };
  }
  images = [
    { id: 0, download_url: "https://i.picsum.photos/id/10/2500/1667.jpg" },
    { id: 1, download_url: "https://i.picsum.photos/id/0/5616/3744.jpg" },
    { id: 2, download_url: "https://i.picsum.photos/id/100/2500/1656.jpg" },
    { id: 3, download_url: "https://i.picsum.photos/id/1001/5616/3744.jpg" },
    { id: 4, download_url: "https://i.picsum.photos/id/1/5616/3744.jpg" },
    { id: 5, download_url: "https://i.picsum.photos/id/1000/5626/3635.jpg" },
    { id: 6, download_url: "https://i.picsum.photos/id/1002/4312/2868.jpg" },
    { id: 7, download_url: "https://i.picsum.photos/id/1003/1181/1772.jpg" },
    { id: 8, download_url: "https://i.picsum.photos/id/1004/5616/3744.jpg" },
    { id: 9, download_url: "https://i.picsum.photos/id/1005/5760/3840.jpg" },
    { id: 10, download_url: "https://i.picsum.photos/id/10/2500/1667.jpg" },
    { id: 11, download_url: "https://i.picsum.photos/id/0/5616/3744.jpg" },
    { id: 12, download_url: "https://i.picsum.photos/id/100/2500/1656.jpg" },
    { id: 13, download_url: "https://i.picsum.photos/id/1001/5616/3744.jpg" },
    { id: 14, download_url: "https://i.picsum.photos/id/1/5616/3744.jpg" },
    { id: 15, download_url: "https://i.picsum.photos/id/1000/5626/3635.jpg" },
    { id: 16, download_url: "https://i.picsum.photos/id/1002/4312/2868.jpg" },
    { id: 17, download_url: "https://i.picsum.photos/id/1003/1181/1772.jpg" },
    { id: 18, download_url: "https://i.picsum.photos/id/1004/5616/3744.jpg" },
    { id: 19, download_url: "https://i.picsum.photos/id/1005/5760/3840.jpg" },
    { id: 20, download_url: "https://i.picsum.photos/id/10/2500/1667.jpg" },
    { id: 21, download_url: "https://i.picsum.photos/id/0/5616/3744.jpg" },
    { id: 22, download_url: "https://i.picsum.photos/id/100/2500/1656.jpg" },
    { id: 23, download_url: "https://i.picsum.photos/id/1001/5616/3744.jpg" },
    { id: 24, download_url: "https://i.picsum.photos/id/1/5616/3744.jpg" },
    { id: 25, download_url: "https://i.picsum.photos/id/1000/5626/3635.jpg" },
    { id: 26, download_url: "https://i.picsum.photos/id/1002/4312/2868.jpg" },
    { id: 27, download_url: "https://i.picsum.photos/id/1003/1181/1772.jpg" },
    { id: 28, download_url: "https://i.picsum.photos/id/1004/5616/3744.jpg" },
    { id: 29, download_url: "https://i.picsum.photos/id/1005/5760/3840.jpg" }
  ];

  componentDidMount() {
    const listContainer = document.querySelector(".list-container");
    listContainer.addEventListener("scroll", this.handleScroll);
    const portSize = window.innerHeight - listContainer.offsetTop;

    let imageContainer = document.querySelector(".image-container");
    let rowSize = imageContainer.offsetHeight;
    rowSize += parseInt(
      window.getComputedStyle(imageContainer).getPropertyValue("margin-top")
    );
    rowSize += parseInt(
      window.getComputedStyle(imageContainer).getPropertyValue("margin-bottom")
    );

    const numberOfRows = Math.floor(portSize / rowSize);

    for (let i = 0; i < numberOfRows + 2; i++) {
      this.images[i].isVisible = true;
    }

    this.setState({
      numberOfRows: numberOfRows,
      rowSize: rowSize
    });
  }

  handleScroll = event => {
    const scrollTop = event.target.scrollTop;

    const currentIndex = Math.floor(scrollTop / this.state.rowSize);

    for (
      let i = currentIndex;
      i <= currentIndex + this.state.numberOfRows;
      i++
    ) {
      i < this.images.length && (this.images[i].isVisible = true);
    }

    currentIndex && (this.images[currentIndex - 1].isVisible = false);

    currentIndex + this.state.numberOfRows + 1 < this.images.length &&
      (this.images[
        currentIndex + this.state.numberOfRows + 1
      ].isVisible = false);

    this.setState({
      lastIndex: currentIndex
    });
  };

  onselected = image => {
    image.isSelected = !image.isSelected;
    this.setState({ ...this.state.images });
  };

  render() {
    return (
      <div className="App">
        <button
          id="next-btn"
          onClick={() => this.setState({ isCart: !this.state.isCart })}
        >
          {this.state.isCart ? "Prev" : "Next"}
        </button>
        {this.state.isCart ? (
          <h2>List of selected products</h2>
        ) : (
          <h2>List of products</h2>
        )}
        <div className="list-container">
          {this.state.isCart ? (
            <CartComponent images={this.images} />
          ) : (
            <ListComponent images={this.images} onselected={this.onselected} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
