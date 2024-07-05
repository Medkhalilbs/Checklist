// src/store/modules/auth.ts
import { Module } from 'vuex';
import { StateInterface } from '../types';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    role: string;
  };
}

const auth: Module<AuthState, StateInterface> = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: {
      role: '',
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
  mutations: {
    setAuthenticated(state, payload: boolean) {
      state.isAuthenticated = payload;
    },
    setUser(state, payload: { role: string }) {
      state.user = payload;
    },
  },
  actions: {
    login({ commit }, user) {
      // Simulez le login
      commit('setAuthenticated', true);
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setAuthenticated', false);
      commit('setUser', { role: '' });
    },
  },
};

export default auth;
