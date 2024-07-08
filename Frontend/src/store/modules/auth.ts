import { Module, ActionContext } from 'vuex';
import axios from 'axios';
import { AuthState, User } from '../interfaces/auth';
import { RootState } from '../interfaces/rootState';

const state: AuthState = {
  user: null,
  isAuthenticated: false
};

const mutations = {
  SET_USER(state: AuthState, user: User) {
    state.user = user;
    state.isAuthenticated = true;
  },
  CLEAR_USER(state: AuthState) {
    state.user = null;
    state.isAuthenticated = false;
  },
};

const actions = {
  async login({ commit }: ActionContext<AuthState, RootState>, credentials: { username: string; password: string }) {
    const response = await axios.post('http://127.0.0.1:5000/api/auth/login', credentials);
    commit('SET_USER', response.data.user);
  },
  async logout({ commit }: ActionContext<AuthState, RootState>) {
    await axios.post('http://127.0.0.1:5000/api/auth/logout');
    commit('CLEAR_USER');
  },
};

const getters = {
  user: (state: AuthState) => state.user,
};

const authModule: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
