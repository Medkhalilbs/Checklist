<template>
  <q-page class="login-page">
    <q-card class="login-card">
      <q-card-section class="q-pa-md">
        <div class="text-h4 q-mb-sm">Login</div>
        <q-input v-model="username" label="Username" outlined dense dense-placeholder />
        <q-input v-model="password" type="password" label="Password" outlined dense dense-placeholder />
        <q-btn @click="login" label="Login" color="primary" class="q-mt-md" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Light gray background */
}

.login-card {
  width: 350px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
}

.q-mb-sm {
  margin-bottom: 8px;
}

.q-mt-md {
  margin-top: 16px;
}

.text-h4 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.q-input {
  border-radius: 4px;
}

.q-btn {
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', { username: this.username, password: this.password });
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed', error);
      }
    }
  }
});
</script>
