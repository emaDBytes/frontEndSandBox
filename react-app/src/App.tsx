import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Vaasa", "Helsinki", "Espoo", "Kauniainen", "Porvoo"];

  const handleSelecItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecItem}
      />
    </div>
  );
}

export default App;
