import React from "react";
import Button from "../ui/button";

const TEXT_MESSAGE = "Hello world";
const TEXT_BUTTON = "Say hi";
const TEG_NAME_DIV = "div";

const Helloworld = React.createElement(
  TEG_NAME_DIV,
  {},
  <Button onClick={() => alert(TEXT_MESSAGE)}>{TEXT_BUTTON}</Button>
);

export default Helloworld;
