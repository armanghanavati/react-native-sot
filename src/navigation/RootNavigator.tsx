import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import MainTabsNavigator from "./MainTabsNavigator";

const Stack = createStackNavigator();

const RootNavigator: React.FC<{
  isAuthenticated: boolean;
  setIsAuthenticated: any;
}> = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth">
          {(props) => (
            <AuthNavigator {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
