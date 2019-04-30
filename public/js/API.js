import { get } from "axios";
import ServerActions from "./actions/ServerActions";

class API {
  fetchMessages() {
    console.log("1. In API");
    get("/data/messages")
      .then(resp => ServerActions.receiveMessages(resp.data))
  }
}

export default new API();