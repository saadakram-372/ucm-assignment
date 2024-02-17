import React from "react";
import { Text } from "react-native";

import { ScreenLayout } from "../../../components/screen-layout/ScreenLayout";
import { useMoviesList } from "../hooks";

export const MoviesListScreen = () => {
  const { data, isLoading } = useMoviesList({ page: 1, language: "en-US" });

  return (
    <ScreenLayout>
      <Text>Movies</Text>
    </ScreenLayout>
  );
};
