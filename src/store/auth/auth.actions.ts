import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';
import router from '@/router';

export default {
  login: async ({ commit, dispatch }, firebaseAuthUser) => {
    const usersService = { getUser() {} };
    const user = await usersService.getUser();

    commit('setUser', user);
    dispatch('products/getUserProducts', null, { root: true });
  },

  logout: ({ commit }) => {
    commit('setUser', null);
    commit('products/setProducts', null, { root: true });

    const currentRouter = router.app.$route;
    if (!(currentRouter.meta && currentRouter.meta.authNotRequired)) {
      router.push('/login');
    }
  },
} as ActionTree<AuthState, RootState>;
