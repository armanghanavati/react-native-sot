import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Category {
  id: string | number;
  name: string;
  icon?: string;
  label?: string;
}

interface TalentModeProps {
  categories: Array<{
    id: string;
    name: string;
    icon?: string;
    label?: string;
  }>;
  isLoading?: boolean;
  defaultIcon?: JSX.Element;
  containerStyle?: object;
  itemStyle?: object;
  iconStyle?: object;
  textStyle?: object;
  handleAcceptCategory?: (data: Category) => void;
  iconMap?: Record<string, JSX.Element>;
}

const SoftLink: FC<TalentModeProps> = ({
  iconMap = {},
  categories = [],
  handleAcceptCategory = () => {},
  isLoading = false,
  defaultIcon = styles.defaultIcon,
  containerStyle = styles.defaultContainer,
  itemStyle = styles.defaultItem,
  textStyle = styles.defaultText,
}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <Loading isLoading={isLoading} /> */}
      <View style={[styles.container, containerStyle]}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => handleAcceptCategory(category)}
            style={[styles.item, itemStyle]}
          >
            <View style={styles.iconContainer}>
              {category.icon
                ? iconMap[category.icon.toLowerCase()] || defaultIcon
                : defaultIcon}
            </View>
            <Text style={[styles.text, textStyle]}>
              {category.label || category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
  },
  defaultContainer: {
    width: "100%",
    maxWidth: 500,
    marginTop: 10,
    backgroundColor: "white",
  },
  item: {
    borderRadius: 8,
    minWidth: 200,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f5f5f5",
  },
  defaultItem: {
    borderRadius: 8,
    minWidth: 200,
    margin: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f5f5f5",
  },
  iconContainer: {
    marginRight: 12,
  },
  defaultIcon: {
    fontSize: 24,
    marginHorizontal: 12,
    color: "#000",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  defaultText: {
    fontSize: 20,
    paddingVertical: 8,
    color: "#6200ee", // Primary color
  },
});

export default SoftLink;
