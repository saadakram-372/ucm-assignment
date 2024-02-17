import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

import spacing from "../../../theme/spacing";
import { MoviesSerializedType } from "../types";

type Props = {
  data: MoviesSerializedType;
};

export function MovieTile({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>WE IN TILE</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.mediumPlus,
  },
});
