import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";

class ServerActions {
  receiveMessages(messages) {
    console.log("2. In ServerActions");
    
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_MESSAGES,
      messages
    });
  }
}

export default new ServerActions();