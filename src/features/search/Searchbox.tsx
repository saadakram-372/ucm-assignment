import React from "react";

import { View, StyleSheet } from "react-native";

import { TextInput } from "../../components/text-input/TextInput";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";
import { useSearch } from "./hooks";

type Props = {
  searchedText: string;
  setSearchedText: (text: string) => void;
};

export const Searchbox = ({ searchedText, setSearchedText }: Props) => {
  useSearch({ title: searchedText });

  return (
    <View style={styles.container}>
      <TextInput
        inputMode="text"
        text={searchedText}
        onChangeText={setSearchedText}
        placeholder={"Type to search a movie"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.large,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: spacing.smaller,
    padding: spacing.smaller,
  },
});
