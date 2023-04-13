import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';
import { useIssuesStore } from 'src/stores/issues';
import { computed } from 'vue';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();

  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60, // hour
  });

  return {
    labelsQuery,

    // Getters
    selectedLabels: computed(() => issuesStore.labels),

    // Methods
    toggleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
