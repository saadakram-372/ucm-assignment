import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ScreenLayout } from "./components/screen-layout/ScreenLayout";

import { DataProvider } from "./react-query/DataProvider";

const App = () => {
  return (
    <ScreenLayout>
      <DataProvider>
        <Text>Sample text</Text>
      </DataProvider>
    </ScreenLayout>
  );
};

export default App;
