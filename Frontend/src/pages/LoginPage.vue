<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" ref="form">
          <q-input
            v-model="username"
            label="Username"
            outlined
            clearable
            dense
            lazy-rules
            :rules="[val => !!val || 'Field is required']"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined
            clearable
            dense
            lazy-rules
            :rules="[val => !!val || 'Field is required']"
          />

          <q-btn
            type="submit"
            label="Login"
            color="primary"
            class="full-width q-mt-md"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const form = ref(null);

const onSubmit = () => {
  form.value.validate().then(success => {
    if (success) {
      // Handle login logic here
      console.log('Form submitted', { username: username.value, password: password.value });
    }
  });
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
