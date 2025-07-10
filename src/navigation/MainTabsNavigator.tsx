import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TalentScreen from "../screens/TalentScreen";
import WatchScreen from "../screens/WatchScreen";
import Icon from "react-native-vector-icons/Ionicons";
import GeneralLayout from "../layout";

const Tabs = createBottomTabNavigator();

const MainTabsNavigator: React.FC = () => {
  return (
    <GeneralLayout
      withHeader={true}
      withFooter={true}
      headerProps={{ title: "Home", showBack: false }}
    >
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // آیکون‌ها بر اساس نام صفحه
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Notifications") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Talent") {
              iconName = focused ? "star" : "star-outline";
            } else if (route.name === "Watch") {
              iconName = focused ? "play-circle" : "play-circle-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato", // رنگ آیکون‌های فعال
          tabBarInactiveTintColor: "gray", // رنگ آیکون‌های غیرفعال
        })}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Watch" component={WatchScreen} />
        <Tabs.Screen name="Talent" component={TalentScreen} />
        <Tabs.Screen name="Notifications" component={NotificationsScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    </GeneralLayout>
  );
};

export default MainTabsNavigator;
