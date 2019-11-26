export interface AddressBookSession {
  username: string;
  id: number;
}

export interface AuthState {
  addressBook?: AddressBookSession;
}
