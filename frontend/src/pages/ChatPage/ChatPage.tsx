import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import styles from "./ChatPage.module.scss";
import ChatPanel from "./ChatPanel/ChatPanel";

const ChatPage = () => {
  return (
    <main className={styles.chatPage}>
      <Sidebar />
      <div className={styles.body}>
        <ChatPanel />
        <Chat />
      </div>
    </main>
  );
};

export default ChatPage;
