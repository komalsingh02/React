import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   //EventHandler
  //   const handleClick = (e: MouseEvent) => console.log("clicked", e.target);
  //   let selectedId = 1;
  const [selectedId, setSelectedId] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            // className="list-group-item active"
            className={
              selectedId === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              //   selectedId: index;
              setSelectedId(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

//   let items = ["NewYork", "San Frans", "India", "america", "Canada"];
//   //   const message = items.length === 0 ? <p>NO ITEM FOUND </p> : null;
//   const message = items.length === 0 && <p>No item Found</p>;
