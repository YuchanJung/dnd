import { DragDropContext, Droppable } from "react-beautiful-dnd";


function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">{() => <ul></ul>}</Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
