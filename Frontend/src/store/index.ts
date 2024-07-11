import { InjectionKey } from 'vue';
import authModule from './modules/auth';
import checklistModule from './modules/checklist';
import { RootState } from './interfaces/rootState';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

export interface StateInterface {
  example: unknown;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key');

const Store = createStore<RootState>({
  modules: {
    auth: authModule,
    checklist: checklistModule,
  },
  strict: !!process.env.DEBUGGING,
});

export default Store;

export function useStore() {
  return vuexUseStore(storeKey);
}
