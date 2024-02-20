import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AllScreenParams } from "app-config/navigators";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../helpers/utils";
import { Config } from "../../../app-config/config";
import colors from "../../../theme/colors";
import spacing from "../../../theme/spacing";
import { ListItem } from "../components/ListItem";

type Props = {
  route: RouteProp<AllScreenParams, "movieDetail">;
};

export const MovieDetailScreen = ({ route }: Props) => {
  const {
    title,
    adult,
    overview,
    poster_path,
    vote_average,
    original_language,
  } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.background}
        source={{
          uri: `${Config.IMAGE_BASE_URL}${poster_path}`,
        }}>
        <View style={styles.bottomsheet}>
          <ScrollView bounces={false}>
            {/* Overlay to make the frost container of icon a bit more dark */}
            <View style={styles.overlay} />

            {/* Details screen title */}
            <Text style={styles.title}>Movie Detail</Text>

            {/* Title */}
            <ListItem heading="Title" content={title} />

            {/* Title */}
            <ListItem heading="Language" content={original_language} />

            {/* Rating */}
            <ListItem heading="Rating" content={vote_average.toFixed(1)} />

            {/* Adult Rated */}
            <ListItem heading="Adult" content={adult ? "Yes" : "No"} />

            <View style={styles.section}>
              <ScrollView>
                <Text style={styles.overview}>{overview}</Text>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  overlay: {
    opacity: 0.8,
    width: "100%",
    position: "absolute",
    minHeight: SCREEN_HEIGHT * 0.6,
    backgroundColor: colors.black,
    borderTopLeftRadius: spacing.large,
    borderTopRightRadius: spacing.large,
  },
  bottomsheet: {
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.6,
    position: "absolute",
    paddingTop: spacing.mediumPlus,
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
    marginVertical: spacing.hugePlus,
  },
  section: {
    backgroundColor: colors.dark,
    margin: spacing.mediumPlus,
    padding: spacing.mediumPlus,
    borderRadius: 16,
    height: 120,
  },
  overview: {
    color: colors.white,
    fontSize: 16,
  },
});
