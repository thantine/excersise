import React from "react";
import API from "../API";
import MessageStore from "../stores/MessageStore";

const _getAppState = () => {
  return { messages: MessageStore.getAll() };
};

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    API.fetchMessages();
    MessageStore.on("change", this.onChange);
  }

  componentWillUnmount() {
    MessageStore.removeListener("change", this.onChange);
  }

  onChange() {
    this.setState(_getAppState());
  }

  render() {
    const content = this.state.messages.map(
      msg => <li key={msg._id}>{msg.content}</li>
    );
    return (<div>
      <h3>Messages</h3>
      <ul>
        {content}
      </ul>
    </div>)
  }
}