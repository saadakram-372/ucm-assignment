import React, { useState } from "react";
import { View } from "react-native";

import { useMoviesList } from "../hooks";
import { MovieListItem } from "../components";
import { ListComponent, ListEmptyMessage } from "../../../components/lists";
import { ScreenLayout } from "../../../components/screen-layout/ScreenLayout";
import { Searchbox } from "../../../features/search/Searchbox";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { AllScreenParams } from "../../../app-config/navigators";
import { PaginationComponent } from "../../../components/pagination";

type Props = {
  navigation: NativeStackNavigationProp<AllScreenParams>;
};

export const MoviesListScreen = ({ navigation }: Props) => {
  const [page, setPage] = useState(1);

  const { data: movies, isLoading } = useMoviesList({
    page,
    language: "en-US",
  });

  const [searchedText, setSearchText] = useState("");

  if (movies == null) {
    return null;
  }

  return (
    <ScreenLayout>
      <>
        <Searchbox
          searchedText={searchedText}
          setSearchedText={setSearchText}
        />

        <ListComponent
          data={movies.results}
          renderItem={({ item }) => (
            <MovieListItem data={item} navigation={navigation} />
          )}
          ListEmptyComponent={<ListEmptyMessage message="No movies found" />}
        />

        <PaginationComponent
          currentPage={page}
          setPageIndex={setPage}
          lastPage={movies.total_pages}
        />
      </>
    </ScreenLayout>
  );
};
