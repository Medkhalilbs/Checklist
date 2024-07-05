import { createStore } from 'vuex';
import auth from './modules/auth';
import checklist from './modules/checklist';
import { StateInterface } from './types';
import { RootState } from './types';

const store = createStore<StateInterface>({
  modules: {
    auth,
    checklist,
  },
  strict: !!process.env.DEBUGGING,
});

export default store;
