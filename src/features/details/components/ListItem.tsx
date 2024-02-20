import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../../theme/colors";
import spacing from "../../../theme/spacing";

import { HorizontalDivider } from "../../../components/dividers/HorizontalDivider";

type Props = {
  heading: string;
  showDivider?: boolean;
  content: string | number;
};

export const ListItem = ({ heading, content, showDivider = true }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.text, { textAlign: "left", width: "30%" }]}>
          {heading}
        </Text>
        <Text style={[styles.text, { textAlign: "right", width: "60%" }]}>
          {content}
        </Text>
      </View>

      {showDivider ? (
        <HorizontalDivider
          width="95%"
          height={StyleSheet.hairlineWidth}
          backgroundColor={colors.silverChalice}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: spacing.mediumPlus,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
  },
});
