import { checkInConstants,  } from "./CheckIn.actons";

const intialState = {
  loading: false,
  user: {},
}

export function checkIn(state = intialState, action) {
  switch (action.type) {
    case checkInConstants.SEND_DATA_START:
      return Object.assign({}, state, {
        loading: true,
      })
    case checkInConstants.SEND_DATA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
      })
    case checkInConstants.SEND_DATA_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      })
    default:
      return state
  }
}