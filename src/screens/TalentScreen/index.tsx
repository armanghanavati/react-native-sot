import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TalentScreenProps { }

const TalentScreen: React.FC = (props: TalentScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>TalentScreen</Text>
        </View>
    );
};

export default TalentScreen;

const styles = StyleSheet.create({
    container: {}
});
