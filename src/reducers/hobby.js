const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }

    case 'SET_ACTIVE_HOBBY': {
      const newactiveId = action.payload.id;
      return {
        ...state,
        activeId: newactiveId,
      };
    }

    default:
      return state;
  }
};

export default hobbyReducer;
