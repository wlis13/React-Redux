import { NAME } from '../action/actionName';

const INIT_NAME = {
  name: '',
}

function reducerName(state = INIT_NAME, action) {
  switch (action.type) {
    case NAME: {
      return {
        ...state,
        name: action.name
      }
    }
    default:
      return state;
  }
}

export default reducerName;