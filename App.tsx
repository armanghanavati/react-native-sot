import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
