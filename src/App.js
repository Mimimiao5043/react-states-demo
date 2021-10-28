import React from "react";
import Header from "./components/Header";
import Album from "./components/Album";
import albumData from "./data/albums.json";
import "./styles.scss";

class App extends React.Component {
  state = {
    albums: albumData,
    activeAlbum: albumData[0]
  };

  handleAlbumChange = (id) => {
    console.log("handleAlbumChange", id);
    // const foundAlbum = this.state.albums.filter((album) => {
    //   return album.id === id;
    // });
    const foundAlbum = this.state.albums.find((album) => {
      return album.id === id;
    });

    this.setState({
      activeAlbum: foundAlbum
    });
  };

  render() {
    const { activeAlbum } = this.state;
    console.log(activeAlbum);
    return (
      <div className="App">
        <Header logoText="My Logo" />
        <section>
          <h1>{this.state.activeAlbum.name}</h1>
          <p>{this.state.activeAlbum.artist}</p>
          <img
            src={this.state.activeAlbum.art}
            alt={this.state.activeAlbum.name}
          />
          {this.state.activeAlbum.reviews.map((review) => {
            return (
              <div key={review.id}>
                <p>{review.name}</p>
                <p>{review.review}</p>
              </div>
            );
          })}
        </section>
        <section>
          <h2>Section</h2>
          {this.state.albums.map((album) => {
            return (
              <Album
                key={album.id}
                id={album.id}
                name={album.name}
                art={album.art}
                handleAlbumChange={this.handleAlbumChange}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
