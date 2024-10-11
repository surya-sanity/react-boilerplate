import { Repo } from "app/types/repo";
import { allApi } from "./all-api";

export const repoService = allApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    /**
     * A query that fetches all repositories of a given user name.
     *
     * The query will fetch all public repositories of the user, sorted by last update time.
     *
     * @param {string} userName The GitHub user name.
     * @returns {Object} An object with a url property containing the API URL.
     */
    getReposByUserName: builder.query<Repo[], { userName: string }>({
      query: ({ userName }) => ({
        url: `https://api.github.com/users/${userName}/repos?type=all&sort=updated`,
      }),
    }),
  }),
});

export const { useGetReposByUserNameQuery } = repoService;
