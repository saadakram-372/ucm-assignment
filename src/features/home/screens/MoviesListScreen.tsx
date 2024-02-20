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
  const [searchedText, setSearchText] = useState("");

  const { data: movies, isLoading } = useMoviesList({
    page,
    language: "en-US",
  });

  return (
    <ScreenLayout>
      <SearchboxWrapper
        searchedText={searchedText}
        setSearchText={setSearchText}>
        {(searchedData) => {
          return isLoading ? (
            <ListLoadingSkeleton />
          ) : movies != null ? (
            <>
              <ListComponent
                data={
                  searchedText != "" && searchedData != null
                    ? searchedData.results
                    : movies.results
                }
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
                lastPage={
                  searchedText != "" && searchedData != null
                    ? searchedData.total_pages
                    : movies.total_pages
                }
              />
            </>
          ) : null;
        }}
      </SearchboxWrapper>
    </ScreenLayout>
  );
};
