import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

type Props = {
  message: string;
  refresh?: () => void;
};

export function ErrorComponent({ message, refresh }: Props) {
  return (
    <View style={styles.fill}>
      <Text>{message}</Text>

      <TouchableOpacity onPress={refresh} style={styles.button}>
        <Text style={styles.text}>Reload App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: spacing.mediumPlus,
    paddingVertical: spacing.smaller,
    backgroundColor: colors.darkBlue,
    margin: spacing.mediumPlus,
    borderRadius: 16,
  },
  text: {
    color: colors.white,
  },
});
