import React, { Component } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent/ListComponent";
import CartComponent from "./components/CartComponent/CartComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      startIndex: 0,
      visibleImages: [
        { id: 0, download_url: "https://i.picsum.photos/id/10/2500/1667.jpg" },
        { id: 1, download_url: "https://i.picsum.photos/id/0/5616/3744.jpg" },
        { id: 2, download_url: "https://i.picsum.photos/id/100/2500/1656.jpg" },
        {
          id: 3,
          download_url: "https://i.picsum.photos/id/1001/5616/3744.jpg"
        },
        { id: 4, download_url: "https://i.picsum.photos/id/1/5616/3744.jpg" }
      ],
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
    document
      .querySelector(".list-container")
      .addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = event.target.scrollTop;
    const rowSize = 200;
    const portSize = 600;
    const numberOfRows = portSize / rowSize;

    //if scrolling upwards then add a image from top and remove from down
    if (scrollTop === 0 && this.state.startIndex !== 0) {
      const visibleRows = [];

      for (
        let i = this.state.startIndex - 1;
        i <= this.state.startIndex + numberOfRows - 1;
        i++
      ) {
        visibleRows.push(this.images[i]);
      }
      event.target.scrollTo(0, scrollTop + rowSize);
      this.setState({
        visibleImages: [...visibleRows],
        startIndex: this.state.startIndex - 1
      });
    }

    //if scrolling downwards then add a image from bottom and remove from top
    if (
      Math.floor(scrollTop / rowSize) > 0 &&
      this.state.startIndex + numberOfRows + 1 < this.images.length
    ) {
      const visibleRows = [];

      for (
        let i = this.state.startIndex + 1;
        i <= this.state.startIndex + numberOfRows + 1;
        i++
      ) {
        visibleRows.push(this.images[i]);
      }
      event.target.scrollTo(0, scrollTop - rowSize);
      this.setState({
        visibleImages: [...visibleRows],
        startIndex: this.state.startIndex + 1
      });
    }
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
            <ListComponent
              images={this.state.visibleImages}
              onselected={this.onselected}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
