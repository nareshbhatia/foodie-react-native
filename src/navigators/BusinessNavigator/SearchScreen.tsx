import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config';
import SafeAreaView from 'react-native-safe-area-view';
import { BusinessNavigatorParamList } from './BusinessNavigator';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#556CD6',
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCD2F2',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: '#FBC02D',
    },
});

type SearchNavigationProp = StackNavigationProp<
    BusinessNavigatorParamList,
    'Search'
>;

type SearchScreenProps = {
    navigation: SearchNavigationProp;
};

export const SearchScreen = ({ navigation }: SearchScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Header</Text>
            </View>
            <View style={styles.content}>
                <Button
                    title="Go to Business"
                    onPress={() => navigation.navigate('Business')}
                />
            </View>
            <View style={styles.footer}>
                <Text>Environment: {Config.ENV_NAME}</Text>
            </View>
        </SafeAreaView>
    );
};
