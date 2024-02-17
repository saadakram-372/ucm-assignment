import React from "react";
import { View, StyleSheet, Text } from "react-native";

import spacing from "../../theme/spacing";

type Props = {
  message: string;
};

export function ListEmptyMessage({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: spacing.mediumPlus,
  },
  title: {
    textAlign: "center",
    marginBottom: spacing.tiny,
    fontWeight: "bold",
    fontSize: 16,
  },
});
