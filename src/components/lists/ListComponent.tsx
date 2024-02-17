import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { ListRenderItem } from "react-native/types";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";

type Props<T> = {
  data: Array<T>;
  renderItem: ({ item }: { item: T }) => React.JSX.Element;
  ListEmptyComponent: JSX.Element;
};

export function ListComponent<T>({
  data,
  renderItem,
  ListEmptyComponent,
}: Props<T>) {
  return (
    <FlatList
      bounces={false}
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      ListEmptyComponent={() => (
        <View style={styles.empty_list_text_view_style}>
          <Text style={styles.text_style}>{ListEmptyComponent}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  text_style: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: "400",
    marginHorizontal: spacing.mediumPlus,
    // marginTop: spacing.textMidScreen,
    textAlign: "center",
  },
  empty_list_text_view_style: {
    alignItems: "center",
  },
});
