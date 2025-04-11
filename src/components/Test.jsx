import React from "react";

const Test = React.memo(({ text, handleLog }) => {
  console.log("Test re - render");

  return <div>Test {text}</div>;
});

export default Test;
