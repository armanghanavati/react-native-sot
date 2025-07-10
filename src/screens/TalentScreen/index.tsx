import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../hooks/reduxState";
import SoftLink from "../../common/SoftLink";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { categoryList } from "../../services/dotNet";

const TalentMode: React.FC = () => {
  const iconSize = 24;
  const { main } = useAppSelector((state) => state);
  const navigation = useNavigation();
  const route = useRoute();
  const [allCategories, setAllCategories] = useState<any>();

  const iconMap: Record<string, JSX.Element> = {
    cup: (
      <Icon
        as={MaterialIcons}
        name="emoji-events"
        size={iconSize}
        style={styles.icon}
      />
    ),
    friendly: (
      <Icon
        as={MaterialCommunityIcons}
        name="handshake"
        size={iconSize}
        style={styles.icon}
      />
    ),
    group: (
      <Icon
        as={MaterialIcons}
        name="groups"
        size={iconSize}
        style={styles.icon}
      />
    ),
    robot: (
      <Icon
        as={MaterialCommunityIcons}
        name="robot"
        size={iconSize}
        style={styles.icon}
      />
    ),
    solo: (
      <Icon
        as={MaterialIcons}
        name="person"
        size={iconSize}
        style={styles.icon}
      />
    ),
  };

  const handleGetCategoryList = async () => {
    const res = await categoryList();
    const { data, status } = res?.data;
    if (status === 0) {
      setAllCategories(data);
    }
    console.log(res);
  };

  useEffect(() => {
    handleGetCategoryList();
  });

  const handleAcceptCategory = (data: any) => {
    navigation.navigate("Profile");
  };

  const categoriesWithIcons = allCategories?.map((category: any) => ({
    ...category,
    icon: category.icon || category.name.toLowerCase(),
  }));

  return (
    <SoftLink
      iconMap={iconMap}
      handleAcceptCategory={handleAcceptCategory}
      categories={categoriesWithIcons || []}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 12,
    color: "#000",
  },
});

export default TalentMode;
