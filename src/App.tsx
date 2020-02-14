import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BusinessNavigator } from './navigators';

export const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BusinessNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
