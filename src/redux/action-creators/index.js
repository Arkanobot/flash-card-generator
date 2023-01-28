export const createCardGroup = (object) => {
  return (dispatch) => {
    dispatch({
      type: "NEW_CARD",
      payload: object,
    });
  };
};

export const deleteCardGroup = (object) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_CARD",
      payload: object,
    });
  };
};

export const createCardTerm = (object) => {
  return (dispatch) => {
    dispatch({
      type: "NEW_TERM",
      payload: object,
    });
  };
};
