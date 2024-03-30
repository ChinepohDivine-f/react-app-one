import ListGroup from "./components/listGroup";

function Message() {
  const items = ["New York", "Buea", "Yaounde", "Douala"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default Message;
