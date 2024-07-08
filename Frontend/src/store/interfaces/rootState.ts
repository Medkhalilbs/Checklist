import { AuthState } from './auth';
import { ChecklistState } from './checklist';

export interface RootState {
  auth: AuthState;
  checklist: ChecklistState;
}
