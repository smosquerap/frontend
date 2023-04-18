import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue } from '../interfaces/issue';
import { State } from 'src/issues/interfaces/issue';
import useStore from './useStore';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();
  params.append('per_page', '10');
  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsStrings = labels.join(',');
    params.append('labels', labelsStrings);
  }
  const { data } = await githubApi<Issue[]>('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const { labels, state } = useStore();

  const issuesQuery = useQuery(
    ['issues', { labels, state }],
    () => getIssues(labels, state),
    {
      staleTime: 1000 * 60 * 60, // hour
    }
  );

  return {
    issuesQuery,
  };
};

export default useIssues;
