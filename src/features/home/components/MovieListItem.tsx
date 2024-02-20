import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import colors from "../../../theme/colors";
import spacing from "../../../theme/spacing";
import { MoviesSerializedType } from "../types";
import { Config } from "../../../app-config/config";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { AllScreenParams } from "../../../app-config/navigators/index";

type Props = {
  data: MoviesSerializedType;
  navigation: NativeStackNavigationProp<AllScreenParams>;
};

export function MovieListItem({
  navigation,
  data: { poster_path, title, release_date, ...other },
}: Props) {
  const onClick = () => {
    navigation.navigate("movieDetail", {
      poster_path,
      title,
      release_date,
      ...other,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <ImageBackground
        resizeMode="stretch"
        imageStyle={styles.image}
        source={{ uri: `${Config.IMAGE_BASE_URL}${poster_path}` }}>
        {/* Adding a little dark shade to make text visible */}
        <View style={styles.overlay} />

        {/* Title + Release date view */}
        <View style={styles.footer}>
          {/* Title */}
          <Text style={styles.title}>Title: {title}</Text>

          {/* Release date */}
          <Text style={styles.release}>Release Date: {release_date}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.mediumPlus,
  },
  image: {
    borderRadius: 16,
    height: 200,
  },
  overlay: {
    opacity: 0.7,
    height: 200,
    backgroundColor: colors.black,
    borderRadius: spacing.mediumPlus,
  },
  footer: {
    position: "absolute",
    bottom: spacing.mediumPlus,
    paddingHorizontal: spacing.mediumPlus,
  },
  title: {
    color: colors.white,
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: spacing.tiny,
  },
  release: {
    color: colors.white,
    flexWrap: "wrap",
    fontSize: 14,
  },
});
