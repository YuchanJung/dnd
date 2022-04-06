import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDosState = atom<IToDoState>({
  key: "toDos",
  default: { to_do: ["a", "b"], doing: ["c", "d"], done: ["e", "f"] },
});
