import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDosState } from "./atom";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDosState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement
      setToDos((prevBoards) => {
        const boardCopy = [...prevBoards[source.droppableId]]; // same with destination.droppableId
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        const newBoards = { ...prevBoards, [source.droppableId]: boardCopy };
        return newBoards;
      });
    }
    else {
      // cross board movement
      setToDos((prevBoards) => {
        const destinationBoard = [...prevBoards[destination.droppableId]];
        const sourceBoard = [...prevBoards[source.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, draggableId);
        const newBoards = {
          ...prevBoards,
          [destination.droppableId]: destinationBoard,
          [source.droppableId]: sourceBoard,
        };
        return newBoards;
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
