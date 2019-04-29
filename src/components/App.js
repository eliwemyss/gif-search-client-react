import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      gifs: []
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(term){
    let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=LchIQvsYZNKTxXbrdWeycwsdke2WmLjU&limit=20`;
    fetch(url)
    .then(response => response.json())
    .then((gifs) => {
      console.log(gifs)
      console.log(url)
      this.setState({
        gifs: gifs.data
      });
      
    });
  }

  
  render(){
    return (
      <div className="App">
        <SearchBar onTermChange={term => this.handleChange(term)} />
        <Gif gifs={this.state.gifs} />
      </div>

    );
  }
}

export default App;
