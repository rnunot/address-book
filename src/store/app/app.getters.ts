import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AppState } from '@/store/app/types';

export default {
  newContentAvailable: state => !!state.SWRegistrationForNewContent,
} as GetterTree<AppState, RootState>;
