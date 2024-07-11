import { Store } from 'vuex';
import { RootState } from './rootState';

export type AppStore = Store<RootState> & {
  getters: {
    'auth/isAuthenticated': boolean;
  };
};
