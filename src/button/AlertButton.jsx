export default function AlertButton({ text, message }) {
  function handleClick(e) {
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
