import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
});

export default Footer;
