import React from "react";

// Chat Style
import style from "./chat.module.scss";

const user1 = {
  name: "Floyd Miles",
  on: "Stark Project",
};

const user2 = {
  name: "Jeremy | TypeScript Engineer",
  on: "Stark Project",
};

const user3 = {
  name: "Floyd Miles",
  on: "Stark Project",
};

const Chat = () => {
  return (
    <div className={style.main_chat_section}>
      <h3> Activities</h3>
      <Notification info={user2} />
      <Message />
      <Notification info={user1} />
      <Message />
      <Notification info={user3} />
      <Message />
      <Notification info={user1} />
      <Message />
      <Notification info={user1} />
      <Message />
    </div>
  );
};

const Notification = (info: any) => {
  return (
    <div className={style.notification_container}>
      <p>Jeremy | TypeScript Engineer</p>
      <li>
        Commented on <span> Dashboard Design</span>
      </li>
    </div>
  );
};

const Message = () => {
  return (
    <div className={style.message_container}>
      <p>
        Hi! I built this entire dashboard with Next.js | SCSS | Chart.js |
        React-icons | Redux | Toastify
      </p>
    </div>
  );
};

export default Chat;
