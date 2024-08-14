import { UserType } from "../HW8";

/*
 * 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию) homeWorkReducer, проверить тестом
 * */

const initialPeople: UserType[] = [
  // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];
type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      if (action.payload === "up") {
        return [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        return [...state].sort((a, b) => (a.name < b.name ? 1 : -1));
      }
    }
    case "check": {
      return state.filter((u) => u.age > 17);
    }
    default:
      return state;
  }
};
