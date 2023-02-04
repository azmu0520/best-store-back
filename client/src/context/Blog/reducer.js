export const initialState = {
  allBlog: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'getAllBlog':
      return { ...state, allBlog: action?.payload?.data };
    default:
      return state;
  }
};
