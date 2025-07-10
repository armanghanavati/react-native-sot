import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import Header from "./Header"; // کامپوننت Header سفارشی شما
import Footer from "./Footer"; // کامپوننت Footer سفارشی شما
import Loading from "../components/Loading"; // کامپوننت Loading

interface GeneralLayoutProps {
  children: ReactNode;
  withHeader?: boolean;
  withFooter?: boolean;
  loading?: boolean;
  headerProps?: any;
  footerProps?: any;
}

const GeneralLayout = ({
  children,
  withHeader = true,
  withFooter = true,
  loading = false,
  headerProps,
  footerProps,
}: GeneralLayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor="#6200ee"
      />

      {withHeader && <Header {...headerProps} />}

      <View style={styles.container}>{loading ? <Loading /> : children}</View>

      {withFooter && <Footer {...footerProps} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default GeneralLayout;
