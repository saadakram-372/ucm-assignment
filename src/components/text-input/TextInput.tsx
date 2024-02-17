import React from "react";
import { InputModeOptions } from "react-native";

import { TextInput as Input } from "react-native";

type Props = {
  text: string;
  placeholder: string;
  inputMode?: InputModeOptions;
  onChangeText: (text: string) => void;
};

export const TextInput = ({
  text,
  placeholder,
  onChangeText,
  inputMode = "text",
}: Props) => {
  return (
    <Input
      value={text}
      autoCorrect={false}
      inputMode={inputMode}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};
