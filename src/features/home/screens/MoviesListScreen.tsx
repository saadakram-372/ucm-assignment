import React from "react";
import { Text } from "react-native";

import { useMoviesList } from "../hooks";
import { MovieTile } from "../components";
import { ListComponent } from "../../../components/lists/ListComponent";
import { ScreenLayout } from "../../../components/screen-layout/ScreenLayout";
import { ListEmptyMessage } from "../../../components/lists/ListEmptyMessage";

export const MoviesListScreen = () => {
  const { data, isLoading } = useMoviesList({ page: 1, language: "en-US" });

  if (data == null) {
    return null;
  }

  return (
    <ScreenLayout>
      <ListComponent
        data={data.results}
        renderItem={({ item }) => <MovieTile data={item} />}
        ListEmptyComponent={<ListEmptyMessage message="No data" />}
      />
    </ScreenLayout>
  );
};
