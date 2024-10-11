import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/types/root-state";
import { repoSliceInitialState } from "../slices/repo-slice";

const selectRepoState = (state: RootState) => state.repo || repoSliceInitialState;

/**
 *
 * Selector to get the repos from the repoSlice
 *
 */
export const selectRepos = createSelector([selectRepoState], (state) => state.repos);
