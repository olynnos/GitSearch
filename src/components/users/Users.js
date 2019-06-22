import React, { Component } from "react";
import UserItem from "./UserItem";

export default class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "john",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://google.com"
      },
      {
        id: "2",
        login: "john",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://google.com"
      },
      {
        id: "3",
        login: "john",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://google.com"
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

// Using variable to add styles to a div. This is one way to do it
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
