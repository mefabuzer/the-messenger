import React from "react";
import styles from "./ChatPanel.module.scss";

import search from "../../../utils/icons/search.png";
import type { IChatsListItem } from "./ChatsListItem/ChatsListItem";
import ChatsListItem from "./ChatsListItem/ChatsListItem";

const TEST_USERS: IChatsListItem[] = [
  {
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFcvmHKM1inSOApmGcIYGT_XsE4KF9Pazuw&s",
    isOnline: true,
    name: "Тимошка228",
  },

  {
    avatarSrc: "https://www.imgworlds.com/_next/static/media/bg.30bc6b82.jpg",
    isOnline: false,
    name: "BA",
  },
];

const ChatPanel = () => {
  return (
    <div className={styles.chatPanel}>
      <div className={styles.top}>
        <h2 className={styles.header}>Чаты</h2>
        <div className={styles.search}>
          <button className={styles.button}>
            <img src={search} alt="The seach" />
          </button>
          <input
            type="text"
            className={styles.input}
            placeholder="Поиск чатов..."
          />
        </div>
      </div>
      <div className={styles.chatsList}>
        {TEST_USERS.map((elem) => (
          <ChatsListItem
            avatarSrc={elem.avatarSrc}
            isOnline={elem.isOnline}
            name={elem.name}
            key={elem.avatarSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatPanel;
