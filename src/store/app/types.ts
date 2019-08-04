export interface AppState {
  appTitle: string;
  appShortTitle: string;
  networkOnLine: boolean;
  SWRegistrationForNewContent?: ServiceWorkerRegistration;
  showAddToHomeScreenModalForApple: boolean;
  refreshingApp: boolean;
}
