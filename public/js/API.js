import { post } from "axios";
import ServerActions from "./actions/ServerActions";

class API {
  fetchMessages() {
    post("/graphql", {
      query: `{
        messages {
          _id,
          content
        }
      }`
    }).then(resp => ServerActions.receiveMessages(resp.data.data.messages))
  }
}

export default new API();