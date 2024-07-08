import { Module, ActionContext } from 'vuex';
import axios from 'axios';
import { ChecklistState, ChecklistItem } from '../interfaces/checklist';
import { RootState } from '../interfaces/rootState';

const state: ChecklistState = {
  checklists: [],
};

const mutations = {
  SET_CHECKLISTS(state: ChecklistState, checklists: ChecklistItem[]) {
    state.checklists = checklists;
  },
  ADD_CHECKLIST(state: ChecklistState, checklist: ChecklistItem) {
    state.checklists.push(checklist);
  },
  UPDATE_CHECKLIST(state: ChecklistState, updatedChecklist: ChecklistItem) {
    const index = state.checklists.findIndex(c => c._id === updatedChecklist._id);
    if (index !== -1) {
      state.checklists.splice(index, 1, updatedChecklist);
    }
  },
  DELETE_CHECKLIST(state: ChecklistState, id: string) {
    state.checklists = state.checklists.filter(c => c._id !== id);
  },
};

const actions = {
  async fetchChecklists({ commit }: ActionContext<ChecklistState, RootState>) {
    const response = await axios.get('http://127.0.0.1:5000/api/checklists');
    commit('SET_CHECKLISTS', response.data);
  },
  async addChecklist({ commit }: ActionContext<ChecklistState, RootState>, checklist: ChecklistItem) {
    const response = await axios.post('http://127.0.0.1:5000/api/checklists', checklist);
    commit('ADD_CHECKLIST', response.data);
  },
  async updateChecklist({ commit }: ActionContext<ChecklistState, RootState>, checklist: ChecklistItem) {
    const response = await axios.put(`http://127.0.0.1:5000/api/checklists/${checklist._id}`, checklist);
    commit('UPDATE_CHECKLIST', response.data);
  },
  async deleteChecklist({ commit }: ActionContext<ChecklistState, RootState>, id: string) {
    await axios.delete(`http://127.0.0.1:5000/api/checklists/${id}`);
    commit('DELETE_CHECKLIST', id);
  },
};

const getters = {
  checklists: (state: ChecklistState) => state.checklists,
};

const checklistModule: Module<ChecklistState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default checklistModule;
