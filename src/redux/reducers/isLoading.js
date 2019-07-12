import { REQUEST_HOME_INFO, RECEIVE_HOME_INFO } from "../action-type";

const isLoading = (isLoading = false, action) => {
  switch (action.type) {
    case REQUEST_HOME_INFO:
      return isLoading = true
    case RECEIVE_HOME_INFO:
      return isLoading = false
    default:
      return isLoading
  }
}

export default isLoading
