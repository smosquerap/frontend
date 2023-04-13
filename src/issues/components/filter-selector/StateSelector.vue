<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issues';

const issueStore = useIssuesStore();
</script>

<template>
  <q-btn-toggle
    toggle-color="primary"
    push
    spread
    :options="[
      {
        label: 'All',
        value: '',
      },
      {
        label: 'Open',
        value: 'open',
      },
      {
        label: 'Closed',
        value: 'closed',
      },
    ]"
    v-model="issueStore.state"
  />
</template>

<style scoped></style>
