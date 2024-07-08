export interface ChecklistItem {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ChecklistState {
  checklists: ChecklistItem[];
}
