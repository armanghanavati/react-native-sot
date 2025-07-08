import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import store from "./src/hooks/store";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootNavigator
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
