import React, { Fragment, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { Placeholder, PlaceholderLine, ShineOverlay } from "rn-placeholder";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import { HorizontalDivider } from "../dividers/HorizontalDivider";

type Props = {
  lines?: number;
};

export const ListLoadingSkeleton = ({ lines = 5 }: Props) => {
  const widths = useMemo(() => getRandomWidths(lines), [lines]);

  return (
    <Placeholder Animation={ShineOverlay}>
      {Array.from({ length: lines }).map((_, index) => (
        <Fragment key={index}>
          <View style={styles.container}>
            <PlaceholderLine
              color={colors.grey}
              width={widths[index]}
              noMargin={true}
            />
          </View>
          {index < lines - 1 ? (
            <HorizontalDivider
              height={StyleSheet.hairlineWidth}
              width="100%"
              backgroundColor={colors.black}
            />
          ) : null}
        </Fragment>
      ))}
    </Placeholder>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.mediumPlus,
  },
});

const getRandomWidth = (): number => {
  return 80 + Math.floor(Math.random() * Math.floor(30));
};

const getRandomWidths = (length: number): Array<number> => {
  return Array.from({ length }).map(() => getRandomWidth());
};
