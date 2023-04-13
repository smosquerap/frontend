<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import IssueList from '../components/issue-list/IssueList.vue';
</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <FilterSelector />
    </div>
    <div class="col-xs-12 col-md-8">
      <LoaderSpinner color="white" />
      <IssueList />
    </div>
  </div>
</template>

<style scoped></style>
