import { createRoot } from "react-dom/client";
import Container from "./Container";
import HelloHorld from "./HelloWorld";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloHorld />
      <AlertButton text="Click Me" message="You click me" />
      <MyButton text="AKU" onSmash={() => alert("aku")} />
    </Container>
  </StrictMode>
);
