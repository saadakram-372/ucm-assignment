import React from "react";
import { View, StyleSheet, Text } from "react-native";

import spacing from "../../theme/spacing";

type Props = {
  message: string;
};

export const ListEmptyMessage = ({ message }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: spacing.tiny,
    fontWeight: "bold",
    fontSize: 16,
  },
});
