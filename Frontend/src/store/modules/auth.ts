import { Module, Commit } from 'vuex';
import axios from 'axios';
import { RootState } from '../interfaces/rootState';

export interface AuthState {
  token: string | null;
  user: string | null;
}

const state: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
};

const getters = {
  isAuthenticated: (state: AuthState) => !!state.token,
  user: (state: AuthState) => state.user,
};

const actions = {
  async login({ commit }: { commit: Commit }, credentials: { username: string; password: string }) {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/auth/login', credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      commit('SET_TOKEN', token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Optionally handle or rethrow the error
    }
  },
  logout({ commit }: { commit: Commit }) {
    localStorage.removeItem('token');
    commit('CLEAR_AUTH');
  },
};

const mutations = {
  SET_TOKEN(state: AuthState, token: string) {
    state.token = token;
  },
  CLEAR_AUTH(state: AuthState) {
    state.token = null;
    state.user = null;
  },
};

const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default authModule;
