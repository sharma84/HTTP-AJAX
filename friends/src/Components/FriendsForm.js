import React from "react";
import "../App.css";
import axios from "axios";

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewFriendButton = (event) => {
    event.preventDefault();
    let newFriendAdded = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriendAdded)
      .then((response) => {
        this.props.updatedFriendsArray(response.data);
        //this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form className="box" onSubmit={this.addNewFriendButton}>
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          value={this.state.name}
          placeholder="...name"
        />
        <input
          type="number"
          name="age"
          onChange={this.onChange}
          value={this.state.age}
          placeholder="...age"
        />
        <input
          type="text"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
          placeholder="...email"
        />

        <button type="submit">Add A New Friend </button>
      </form>
    );
  }
}

export default FriendsForm;
