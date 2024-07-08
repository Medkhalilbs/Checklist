<template>
  <div class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleTask(task._id)" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskItem',
  props: {
    task: {
      type: Object as () => {
        _id: string;
        title: string;
        description: string;
        completed: boolean;
      },
      required: true
    }
  },
  methods: {
    toggleTask(taskId: string) {
      // Logic to toggle task completion status
      this.$emit('toggle-task', taskId);
    }
  }
});
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
}
.completed {
  text-decoration: line-through;
}
</style>
