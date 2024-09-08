const initState = {
  isLoading: false,
};

type stateType = typeof initState;

type ActionsType = LoadingActionType;

export const loadingReducer = (state = initState, action: ActionsType): stateType => {
  // fix any
  switch (action.type) {
    case "CHANGE_LOADING": {
      return { isLoading: action.isLoading };
    }
    // пишет студент  // need to fix

    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
