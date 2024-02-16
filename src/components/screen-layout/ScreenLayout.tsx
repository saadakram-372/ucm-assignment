import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

// theme
import spacing from "../../theme/spacing";

type Props = {
  children: React.JSX.Element;
};

export const ScreenLayout = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.mediumPlus,
  },
});
