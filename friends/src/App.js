import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";

import FriendsList from "./Components/FriendsList";
import FriendsForm from "./Components/FriendsForm";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then((response) => {
        this.setState({ friends: response.data });
      })
      .catch((err) => console.log(err));
  }

  updatedFriendsArray = (friends) => {
    this.setState({ friends });
  };

  // deleteFriendButton = (id) => {
  //   //let id = event.target.id;
  //   //const friends = this.state.friends.find((friend) => friend.id === id);

  //   axios
  //     .delete(`http://localhost:5000/friends/${id}`)
  //     .then((response) => {
  //       this.setState({ friends: response.data });
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    return (
      <div>
        <FriendsForm updatedFriendsArray={this.updatedFriendsArray} />
        <FriendsList
          friends={this.state.friends}
          //deleteFriendButton={this.deleteFriendButton}
          updatedFriendsArray={this.updatedFriendsArray} 
        />
      </div>
    );
  }
}

export default App;
