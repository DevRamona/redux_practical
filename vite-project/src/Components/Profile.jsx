import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.user.value)
  return (
    <>
      <h1 className="text-4xl mb-3">Profile page</h1>
      <p>name: {user.name} </p>
      <p>age : {user.age} </p>
      <p>email : {user.email} </p>
    </>
  );
}

export default Profile;
