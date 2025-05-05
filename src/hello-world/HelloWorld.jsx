import "./HelloWorld.css";

import Counter from "../button/Counter";

function HeaderHelloWorld({ text = "Ups, lupa kasih text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagrafHelloWorld() {
  const text = "Selamat Belajar ReactJS";
  return <p className="content">{text}</p>;
}

export default function HelloHorld() {
  const header = "Hello World";
  return (
    <div>
      <HeaderHelloWorld text={header} />
      <ParagrafHelloWorld />
      <Counter />
    </div>
  );
}
