export const authReducer = (state, action) => {
  switch (action.type) {
    case "[AUTH] - SetUser":
      return {
        ...state,
        user: { ...action.payload },
      };

    default:
      return state;
  }
};
