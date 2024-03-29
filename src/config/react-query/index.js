import { QueryClient, useQuery, useMutation, useInfiniteQuery } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const transformResponse = (res = {}) => res.data;

export const useQueryWrapper = (
  queryKey,
  queryFn,
  options = {}
) => useQuery(
  {
    queryKey,
    queryFn,
    select: transformResponse,
    ...options,
  }
);

export const useInfiniteQueryWrapper = (
  queryKey,
  queryFn,
  options = {}
) => useInfiniteQuery(
  {
    queryKey,
    queryFn,
    ...options,
  }
);

export const useMutationWrapper = (
  mutationFn,
  options = {}
) => useMutation(
  {
    mutationFn,
    onSuccess: (data) => console.log("Succeeded", data),
    onError: (error) => console.log("Errored", error),
    ...options
  }
);
