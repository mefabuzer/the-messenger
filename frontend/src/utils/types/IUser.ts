export interface IUser {
  id: number;
  email: string;
  password: string;
  username: string;
  theme: "purple" | "dark_purple";
  info: string;
  avatar_link: string;
  created_at: string;
  is_admin: boolean;
  last_seen: string;
  is_email_accepted: boolean;
  is_muted_chats_id: number[];
  is_pinned_chats_id: number[];
}
