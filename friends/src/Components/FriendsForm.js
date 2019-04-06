import React from "react";
import "../App.css";

const FriendsForm = (props) => {
  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={props.onChange}
        value={props.name}
        placeholder="...name"
      />
      <input
        type="number"
        name="age"
        onChange={props.onChange}
        value={props.age}
        placeholder="...age"
      />
      <input
        type="text"
        name="email"
        onChange={props.onChange}
        value={props.email}
        placeholder="..email"
      />

      <button onClick={props.addNewFriend}>Add A New Friend </button>
    </form>
  );
};

export default FriendsForm;
