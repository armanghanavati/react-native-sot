import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider, extendTheme } from 'native-base';

// Screens
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Watch from './src/screens/Watch';
import SignUp from './src/screens/SignUp';
import TalentSot from './src/screens/TalentSot/idnex';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Define the theme
const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          style: {
            outlineWidth: 0, // غیرفعال کردن outline
          },
        },
      },
    },
  },
});

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainApp: undefined;
};

type MainTabParamList = {
  Home: undefined;
  Watch: undefined;
  TalentSot: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Watch':
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              break;
            case 'TalentSot':
              iconName = focused ? 'people' : 'people-outline';
              break;
            default:
              iconName = 'alert-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Watch" component={Watch} />
      <Tab.Screen name="TalentSot" component={TalentSot} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false
            }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainApp" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>

  );
};

export default App;