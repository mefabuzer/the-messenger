import React from "react";

import styles from "./ChatsListItem.module.scss";

// test export
export interface IChatsListItem {
  avatarSrc: string;
  name: string;
  isOnline: boolean;
}

const ChatsListItem: React.FC<IChatsListItem> = ({
  avatarSrc,
  isOnline,
  name,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatarBody}>
        <img src={avatarSrc} alt="avatar" />
        <div
          className={
            isOnline
              ? styles.online
              : `${styles.online + " " + styles.yesOnline}`
          }
        ></div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ChatsListItem;
