<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-my-md">
      <q-select v-model="type" :options="types" label="Type" class="q-mr-md" />
      <q-input v-model="version" label="Version" class="q-mr-md" />
      <q-btn label="Add Checklist" color="primary" @click="addChecklist" />
    </div>

    <q-list bordered>
      <q-item v-for="checklist in checklists" :key="checklist._id">
        <q-item-section>
          <q-item-label>{{ checklist.type }} - {{ checklist.version }}</q-item-label>
          <q-item-label caption>
            <div v-for="task in checklist.tasks" :key="task._id">
              <q-checkbox v-model="task.completed" :label="task.description" />
            </div>
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="edit" @click="editChecklist(checklist)" />
          <q-btn icon="delete" @click="deleteChecklist(checklist._id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { ChecklistState } from '../store/modules/checklist'; // Adjust import path based on your project structure


export default {
  data() {
    return {
      type: '',
      version: '',
      types: ['patch', 'release'],
    };
  },
  computed: {
    ...mapGetters('checklist', ['checklists']),

  },
  methods: {
    ...mapActions('checklist', ['fetchChecklists', 'addChecklist', 'updateChecklist', 'deleteChecklist']),
    async addChecklist() {
      const checklist = {
        type: this.type,
        version: this.version,
        tasks: [],
      };

      await this.addChecklist(checklist);
      this.type = '';
      this.version = '';
    },
    editChecklist(checklist) {
      // Implement edit functionality
    },
    async deleteChecklist(id) {
      await this.deleteChecklist(id);
    },
  },
  async mounted() {
    await this.fetchChecklists();
  },
};
</script>
