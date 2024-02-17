import React, { useState } from "react";
import { View } from "react-native";

import { useMoviesList } from "../hooks";
import { MovieListItem } from "../components";
import { ListComponent } from "../../../components/lists/ListComponent";
import { ScreenLayout } from "../../../components/screen-layout/ScreenLayout";
import { ListEmptyMessage } from "../../../components/lists/ListEmptyMessage";
import { Searchbox } from "../../../features/search/Searchbox";

export const MoviesListScreen = () => {
  const { data, isLoading } = useMoviesList({ page: 1, language: "en-US" });

  const [searchedText, setSearchText] = useState("");

  if (data == null) {
    return null;
  }

  return (
    <ScreenLayout>
      <View>
        <Searchbox
          searchedText={searchedText}
          setSearchedText={setSearchText}
        />

        <ListComponent
          data={data.results}
          renderItem={({ item }) => <MovieListItem data={item} />}
          ListEmptyComponent={<ListEmptyMessage message="No data" />}
        />
      </View>
    </ScreenLayout>
  );
};
