import React from "react";
function Box(props) {
  console.log(props);
  return <div>{props.time}</div>;
}

export default Box;
