import React  from "react";
import "emoji-mart/css/emoji-mart.css";
import { NimblePicker } from "emoji-mart";
import "./Input.css";
import data from 'emoji-mart/data/google.json'

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
      SEND 
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
    </button>
  </form>
);

export default Input;
