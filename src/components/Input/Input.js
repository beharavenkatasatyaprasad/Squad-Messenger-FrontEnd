import React  from "react";
import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="btn-primary sendButton" onClick={(e) => sendMessage(e)}>
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
    </button>
  </form>
);

export default Input;
