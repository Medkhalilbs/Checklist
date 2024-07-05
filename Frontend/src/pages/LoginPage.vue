<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="username" label="Username" />
        <q-input v-model="password" label="Password" type="password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    async login() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push('/');
      } catch (error) {
        this.$q.notify({ type: 'negative', message: 'Login failed' });
      }
    },
  },
};
</script>
