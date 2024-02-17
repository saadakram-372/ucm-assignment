import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

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
      bounces={true}
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      ListEmptyComponent={() => (
        <View style={styles.emptyView}>
          <Text style={styles.text}>{ListEmptyComponent}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: "400",
    marginHorizontal: spacing.mediumPlus,
    textAlign: "center",
  },
  emptyView: {
    alignItems: "center",
  },
});
