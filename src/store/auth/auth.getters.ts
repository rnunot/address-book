import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';

export default {
  isUserLoggedIn: state => !!state.user,
} as GetterTree<AuthState, RootState>;
