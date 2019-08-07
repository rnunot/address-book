interface User {
  username: string;
  addressBookId: number;
}

export interface AuthState {
  user?: User;
}
