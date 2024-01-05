export interface User {
  id: string;
  name: string;
  userName: string;
  email: string;
  password?: string | null;
  profilePicture?: string | null;
}
