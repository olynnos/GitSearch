import React, { Component } from "react";
import Spinenr from "../layout/Spinner";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repo,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>User</div>;
  }
}

export default User;
