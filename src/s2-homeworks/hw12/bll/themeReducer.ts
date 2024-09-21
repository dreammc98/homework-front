const initState = {
  themeId: 1,
};

export type StateType = typeof initState;

export type changeThemeType = {
  type: "SET_THEME_ID";
  id: number;
};

export type ActionTypes = changeThemeType;

export const themeReducer = (state = initState, action: ActionTypes): StateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID": {
      return { ...state, themeId: action.id };
    }
    default:
      return state;
  }
};

export const changeThemeId = (id: number): changeThemeType => {
  return { type: "SET_THEME_ID", id } as const;
}; // fix any
