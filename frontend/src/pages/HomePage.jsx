import React from "react";

function HomePage({ color = "black", title = "Noob-store" }) {
  return (
    <>
      <div style={{ color, marginLeft: "10px" }}>{title}</div>
    </>
  );
}

export default HomePage;
