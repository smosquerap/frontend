import { useIssuesStore } from 'src/stores/issues';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = issuesStore;

  return {
    // Reactive properties
    labels,
    state,

    // Getters

    // Methods
  };
};

export default useStore;
