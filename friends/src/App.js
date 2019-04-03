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
      friends: [],
      newFriend: [{ name: "", age: "", email: "" }]
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

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewFriend = () => {
    let newFriendAdded = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriendAdded)
      .then((response) => {
        this.setState({ friends: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <FriendsForm
          onChange={this.onChange}
          addNewFriend={this.addNewFriend}
          name={this.state.newFriend.name}
          age={this.state.newFriend.age}
          email={this.state.newFriend.email}
        />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;