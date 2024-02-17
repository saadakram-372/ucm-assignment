import React from "react";
import { ColorValue, DimensionValue, View } from "react-native";

type Props = {
  height: number;
  width: DimensionValue;
  backgroundColor: ColorValue;
};

export const HorizontalDivider = ({
  width,
  height,
  backgroundColor,
}: Props) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: width,
        alignSelf: "center",
        height: height,
        backgroundColor: backgroundColor,
      }}
    />
  );
};
