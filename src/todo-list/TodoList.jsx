import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      text: "Learn ReactJS",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo, index) => (
        <Todo {...todo} key={index} />
      ))}
    </ul>
  );
}
