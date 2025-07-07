import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WatchScreenProps { }

const WatchScreen: React.FC = (props: WatchScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>WatchScreen</Text>
        </View>
    );
};

export default WatchScreen;

const styles = StyleSheet.create({
    container: {}
});
