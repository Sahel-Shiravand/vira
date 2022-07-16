const initialState = {
    formValues: {},
    message: ""
  };
  const reducer = (state = initialState, action) => {
  console.log(action);
    switch (action.type) {
      case "SET_FORMVALUES":
        return {
          ...state,
          formValues: action.payload
        };
      case "SUBMIT_FORM":
        console.log("send form ");
        console.log("Form Data - ", state.formValues);
        return {
          ...state,
          message: "ورود موفق"
        };
      default:
        return state;
    }
  };
  export default reducer;