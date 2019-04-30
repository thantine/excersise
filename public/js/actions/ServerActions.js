import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";

class ServerActions {
  receiveMessages(messages) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_MESSAGES,
      messages
    });
  }
}

export default new ServerActions();