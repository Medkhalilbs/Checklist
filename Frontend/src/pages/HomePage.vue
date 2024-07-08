<template>
  <q-page>
    <header-component />
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="text-h6">Welcome to the Checklist App!</div>
      </q-page>
    </q-page-container>
    <footer-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/Footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style scoped></style>
