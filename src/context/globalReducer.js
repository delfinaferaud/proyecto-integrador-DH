export const globalReducer = (state, action) => {
    switch (action.type) {  
      case 'FETCH_DATA': {
        return {
          ...state,
          data: action.payload,
        };
      }
      
      case 'ADD_PRODUCT': {
        return {
          ...state,
          data: [...state.data, action.payload]
        };
      }
      
      case 'DELETE_PRODUCT': {
        return {
          ...state,
          data: state.data.filter(product => product !== action.payload)
        }
      }
  
      case 'START_LOADING': {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case 'FINISH_LOADING': {
        return {
          ...state,
          isLoading: false,
        };
      }
  
      default: {
        throw new Error(`Action type ${action.type} doesn't exists.`);
      }
    }
  };