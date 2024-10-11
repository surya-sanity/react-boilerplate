import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Spinner from "app/components/spinner/spinner";
import { Input } from "app/components/ui/input";
import { useDebounce } from "app/hooks/use-debounce";
import { cn } from "app/lib/utils";
import { useGetReposByUserNameQuery } from "app/services/repo-api";
import { selectRepos } from "app/store/selectors/repo-selector";
import { useRepoSlice } from "app/store/slices/repo-slice";
import { Repo } from "app/types/repo";
import React, { HTMLAttributes, memo, useState } from "react";
import { useSelector } from "react-redux";

interface RepositorySectionPropsType extends HTMLAttributes<HTMLDivElement> {}

/**
 *
 * RepositorySection
 *
 */
export const RepositorySection: React.FunctionComponent<RepositorySectionPropsType> = memo((props: RepositorySectionPropsType) => {
  // props
  const { className, ...restProps } = props;

  // states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // slice initialization
  useRepoSlice();

  // redux state selectors
  const repos = useSelector(selectRepos);

  // queries and mutations
  const {
    isLoading: isLoadingRepos,
    isFetching: isFetchingRepos,
    isError: isErrorRepos,
  } = useGetReposByUserNameQuery(
    {
      userName: debouncedSearchQuery,
    },
    { refetchOnMountOrArgChange: true, skip: !debouncedSearchQuery || !debouncedSearchQuery.trim().length }
  );

  return (
    <div className={cn("mt-3 flex flex-col gap-3", className)} {...restProps}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <h2 className="font-medium uppercase text-muted-foreground">Github Username</h2>
          {isLoadingRepos || isFetchingRepos ? <Spinner /> : null}
        </div>
        <Input
          className="w-[18rem]"
          value={searchQuery ?? ""}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Enter github username, e.g. facebook"
        />
      </div>

      {!isLoadingRepos && !isFetchingRepos && isErrorRepos && debouncedSearchQuery?.trim().length ? (
        <div>No repos found for {debouncedSearchQuery} ☹️</div>
      ) : null}
      {debouncedSearchQuery?.trim().length && !isErrorRepos ? (
        <div className="flex w-full flex-col gap-0">
          {React.Children.toArray(
            repos.map((repo: Repo, idx: number) => {
              const isOdd = idx % 2 === 0;

              return (
                <div
                  className={cn("flex flex-row items-center justify-between gap-2 px-3 py-2", {
                    "bg-secondary/50": isOdd,
                  })}
                >
                  <div>{repo.name}</div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <div className="mr-1">⭐️</div>
                      <div>{repo.stargazers_count}</div>
                    </div>

                    <a href={repo.html_url} target={"_blank"}>
                      <OpenInNewWindowIcon />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : null}
    </div>
  );
});
