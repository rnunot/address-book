import { AppState } from '@/store/app/types';

export default {
  appTitle: process.env.VUE_APP_TITLE,
  appShortTitle: process.env.VUE_APP_SHORT_TITLE,
  networkOnLine: true,
  SWRegistrationForNewContent: undefined,
  showAddToHomeScreenModalForApple: false,
  refreshingApp: false,
} as AppState;
