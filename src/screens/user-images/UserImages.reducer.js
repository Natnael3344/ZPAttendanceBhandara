import { userImagesConstants } from "./UserImages.actions"

const intialState = {
  loading: false,
  user: {},
}

export function userImages(state = intialState, action) {
  switch (action.type) {
    case userImagesConstants.SEND_DATA_START:
      return Object.assign({}, state, {
        loading: true,
      })
    case userImagesConstants.SEND_DATA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
      })
    case userImagesConstants.SEND_DATA_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      })
    default:
      return state
  }
}