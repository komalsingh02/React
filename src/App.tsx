import ListGroup from "./assets/components/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const handleSelect = (item: string) => {
  console.log(item);
};

function App() {
  let Items = ["komi", "Mahima", "vedi", "Shubu", "Roy"];
  return (
    <div>
      <ListGroup items={Items} heading="clients" onSelectItem={handleSelect} />
    </div>
  );
}
export default App;
