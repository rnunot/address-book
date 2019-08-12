import { MutationTree } from 'vuex';
import { AuthState } from '@/store/auth/types';

export default {
  setUser: (state, value) => (state.user = value),
} as MutationTree<AuthState>;
