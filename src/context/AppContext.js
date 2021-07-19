import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  data: {},
  topics: [],
  bookmarks: [],
  categories: [],
  isLoading: true,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD DATA":
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      const topics = action.payload.result.categories
        .map((item) => item.templates.map((e) => e.title))
        .reduce((a, b) => a.concat(b))
        .filter((i) => i !== undefined);
      if (bookmarks?.length > 0) {
        return {
          ...state,
          categories: action.payload.result.categoryList,
          data: action.payload.result,
          bookmarks: bookmarks,
          topics: topics,
          isError: false,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          categories: action.payload.result.categoryList,
          data: action.payload.result,
          topics: topics,
          isError: false,
          isLoading: false,
        };
      }
    case "ERROR LOAD DATA":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case "BOOKMARK ITEM":
      const data = state;
      const item = action.payload;
      const index = data.bookmarks.findIndex((i) => {
        return i.id == item.id;
      });
      if (index != -1) {
        data.bookmarks.splice(index, index + 1);
        localStorage.setItem("bookmarks", JSON.stringify(data.bookmarks));
        return {
          ...state,
          bookmarks: data.bookmarks,
        };
      } else {
        localStorage.setItem(
          "bookmarks",
          JSON.stringify([...state.bookmarks, item])
        );
        return {
          ...state,
          bookmarks: [...state.bookmarks, item],
        };
      }
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
