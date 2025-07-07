import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NotificationsScreenProps { }

const NotificationsScreen: React.FC = (props: NotificationsScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>NotificationsScreen</Text>
        </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {}
});
