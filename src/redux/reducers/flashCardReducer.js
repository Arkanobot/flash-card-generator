const flashCardReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_FLASHCARD":
      return { ...state, cardGroup: [action.payload] };
    default:
      return state;
  }
};

export default flashCardReducer;
