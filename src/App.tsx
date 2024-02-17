import React from "react";
import AppNavigator from "./app-config/navigators";

import { DataProvider } from "./react-query/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <AppNavigator />
    </DataProvider>
  );
};

export default App;
