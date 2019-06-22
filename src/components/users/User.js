import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline
} from "react-icons/io";

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
      login,
      html_url,
      public_repos,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{" "}
        <IconContext.Provider value={{ className: "hireCheck" }}>
          {hireable ? (
            <IoIosCheckmarkCircleOutline />
          ) : (
            <IoIosCloseCircleOutline />
          )}
        </IconContext.Provider>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location ? location : "unknown"} </p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username:</strong> {login}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            Repositories: {public_repos}{" "}
          </div>
        </div>
      </>
    );
  }
}

export default User;
