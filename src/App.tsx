import React from "react";
import AppNavigator from "./app-config/navigators";
import { ScreenLayout } from "./components/screen-layout/ScreenLayout";

import { DataProvider } from "./react-query/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <AppNavigator />
    </DataProvider>
  );
};

export default App;
