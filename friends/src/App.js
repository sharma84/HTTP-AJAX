import React, { Component } from "react";
import "./App.css";

import FriendsList from "./Components/FriendsList";
import FriendsForm from "./Components/FriendsForm";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "" //placeholder for new friends added
    };
  }

  updateFriends = (newFriendsList) => {
    this.setState({ friends: newFriendsList });
  };

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
        this.updateFriends(response.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <FriendsForm
          onChange={this.onChange}
          addNewFriend={this.addNewFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
        <FriendsList
          friends={this.state.friends}
          updateFriends={this.updateFriends}
        />
      </div>
    );
  }
}

export default App;
