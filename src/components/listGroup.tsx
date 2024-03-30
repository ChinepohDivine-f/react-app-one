import { useState } from "react";

// interface props
interface Props {
  items: string[];
  heading: string;
}  

function ListGroup({items, heading}: Props) {
  // const items = ["New York", "Buea", "Yaounde", "Douala"];
  // let selectectedIndex = 0;
  // items  = [];

  //     const getMessage = () => {
  //         return items.length === 0 ? <p>No item Found</p> : null;
  // }

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // create react hooks: state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selected Index)
  // arr[1] // updater function

  return (
    <>
      {/* react fragment*/}
      <h1>{heading}</h1>
      {/* {getMessage} */}
      {items.length === 0 && <p>No item Found</p>}
      {/* if true the page will be rendered else the error message will be displayed */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/*its advisable to set a key for identification*/}
      </ul>
    </>
  );
}

export default ListGroup;
