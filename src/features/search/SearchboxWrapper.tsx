import React, { useState } from "react";

import { View, StyleSheet } from "react-native";

import { TextInput } from "../../components/text-input/TextInput";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";
import { useSearch } from "./hooks";
import { APIResponseType } from "../../service/types";

type Props = {
  children: (
    searchedData: APIResponseType<any> | undefined
  ) => JSX.Element | null;
};

export const SearchboxWrapper = ({ children }: Props) => {
  const [searchedText, setSearchText] = useState("");

  const { data: searchedData } = useSearch({ title: searchedText });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          inputMode="text"
          text={searchedText}
          onChangeText={setSearchText}
          placeholder={"Type to search a movie"}
        />
      </View>
      {children(searchedData)}
    </>
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
