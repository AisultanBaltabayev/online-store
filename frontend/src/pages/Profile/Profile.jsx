import React from "react";

function Profile({ color = "black", title = "Profile" }) {
  return (
    <>
      <div style={{ color }}>{title}</div>
    </>
  );
}

export default Profile;
