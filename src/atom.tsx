import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

export const toDosState = atom<IToDoState>({
  key: "toDos",
  default: { "To Do": [], Doing: [], Done: [] },
});
