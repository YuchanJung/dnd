import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDosState = atom<IToDoState>({
  key: "toDos",
  default: { "To Do": ["a", "b"], Doing: ["c", "d"], Done: ["e", "f"] },
});
