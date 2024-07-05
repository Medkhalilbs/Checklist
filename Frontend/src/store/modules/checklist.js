import axios from 'axios';

const state = {
  checklists: [],
};

const mutations = {
  SET_CHECKLISTS(state, checklists) {
    state.checklists = checklists;
  },
  ADD_CHECKLIST(state, checklist) {
    state.checklists.push(checklist);
  },
  UPDATE_CHECKLIST(state, updatedChecklist) {
    const index = state.checklists.findIndex(c => c._id === updatedChecklist._id);
    if (index !== -1) {
      state.checklists.splice(index, 1, updatedChecklist);
    }
  },
  DELETE_CHECKLIST(state, id) {
    state.checklists = state.checklists.filter(c => c._id !== id);
  },
};

const actions = {
  async fetchChecklists({ commit }) {
    const response = await axios.get('/api/checklists');
    commit('SET_CHECKLISTS', response.data);
  },
  async addChecklist({ commit }, checklist) {
    const response = await axios.post('/api/checklists', checklist);
    commit('ADD_CHECKLIST', response.data);
  },
  async updateChecklist({ commit }, checklist) {
    const response = await axios.put(`/api/checklists/${checklist._id}`, checklist);
    commit('UPDATE_CHECKLIST', response.data);
  },
  async deleteChecklist({ commit }, id) {
    await axios.delete(`/api/checklists/${id}`);
    commit('DELETE_CHECKLIST', id);
  },
};

const getters = {
  checklists: state => state.checklists,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
