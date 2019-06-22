import React from "react";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const Users = ({ users, loading }) =>
  loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

// Using variable to add styles to a div. This is one way to do it
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

// Using proptypes to ensure we get the desired types
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
