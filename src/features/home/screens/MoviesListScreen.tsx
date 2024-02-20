import React, { useState } from "react";
import { View } from "react-native";

import { useMoviesList } from "../hooks";
import { MovieListItem } from "../components";
import { ListComponent, ListEmptyMessage } from "../../../components/lists";
import { ScreenLayout } from "../../../components/screen-layout/ScreenLayout";
import { SearchboxWrapper } from "../../search/SearchboxWrapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { AllScreenParams } from "../../../app-config/navigators";
import { PaginationComponent } from "../../../components/pagination";
import { ListLoadingSkeleton } from "../../../components/lists/ListLoadingSkeleton";

type Props = {
  navigation: NativeStackNavigationProp<AllScreenParams>;
};

export const MoviesListScreen = ({ navigation }: Props) => {
  const [page, setPage] = useState(1);

  const { data: movies, isLoading } = useMoviesList({
    page,
    language: "en-US",
  });

  return (
    <ScreenLayout>
      <SearchboxWrapper>
        {(searchedData) => {
          const filteredSearch =
            searchedData != null && searchedData.total_results !== 0
              ? searchedData.results
              : [];

          return isLoading ? (
            <ListLoadingSkeleton />
          ) : movies != null ? (
            <>
              <ListComponent
                data={filteredSearch.length ? filteredSearch : movies.results}
                renderItem={({ item }) => (
                  <MovieListItem data={item} navigation={navigation} />
                )}
                ListEmptyComponent={
                  <ListEmptyMessage message="No movies found" />
                }
              />

              <PaginationComponent
                currentPage={page}
                setPageIndex={setPage}
                lastPage={movies.total_pages}
              />
            </>
          ) : null;
        }}
      </SearchboxWrapper>
    </ScreenLayout>
  );
};
